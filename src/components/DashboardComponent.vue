<template>
  <div class="dashboard">
    <!-- 배경 이미지 -->
    <div class="dashboard-background"></div>

    <!-- 그리드 컨테이너 -->
    <div class="grid-container">
      <!-- 첫 번째 표 -->
      <div class="table">
        <!-- 표 제목 -->
        <div class="table-header">환경 데이터</div>
        
        <!-- 첫 번째 행: 온도 -->
        <div class="table-row">
          <div class="table-cell">온도</div>
          <div class="table-cell">{{ localEnvironment.temperature }}</div>
        </div>
        
        <!-- 두 번째 행: 습도 -->
        <div class="table-row">
          <div class="table-cell">습도</div>
          <div class="table-cell">{{ localEnvironment.humidity }}</div>
        </div>
        
        <!-- 세 번째 행: CO2 -->
        <div class="table-row">
          <div class="table-cell">CO2</div>
          <div class="table-cell">{{ localEnvironment.co2 }}</div>
        </div>
      </div>

      <!-- 두 번째 표 -->
      <div class="table">
        <!-- 표 제목 -->
        <div class="table-header">양액 및 재배현황</div>
        
        <!-- 첫 번째 행: EC -->
        <div class="table-row">
          <div class="table-cell">EC</div>
          <div class="table-cell">{{ cultivation.ec }}</div>
        </div>
        
        <!-- 두 번째 행: pH -->
        <div class="table-row">
          <div class="table-cell">pH</div>
          <div class="table-cell">{{ cultivation.ph }}</div>
        </div>
        
        <!-- 세 번째 행: 작물 -->
        <div class="table-row">
          <div class="table-cell">작물</div>
          <div class="table-cell">{{ cultivation.crop }}</div>
        </div>
        
        <!-- 네 번째 행: 재배일수 -->
        <div class="table-row">
          <div class="table-cell">재배일수</div>
          <div class="table-cell">{{ cultivation.cultivationDays }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'DashboardComponent',
  data() {
    return {
      localEnvironment: {
        temperature: null,
        humidity: null,
        co2: null
      },
      cultivation: {
        ec: null,
        ph: null,
        crop: null,
        cultivationDays: null
      }
    };
  },
  mounted() {
    // 컴포넌트가 마운트될 때 데이터를 가져오는 메서드 호출
    this.fetchLocalEnvironment();
    this.fetchCultivationStatus();
  },
  methods: {
    // 로컬 환경 데이터 가져오기
    fetchLocalEnvironment() {
      // 여기에 로컬 환경 데이터를 가져오는 로직을 추가하세요.
      // 예를 들어 API 호출 등
      this.localEnvironment.temperature = '25°C'; // 예시 데이터
      this.localEnvironment.humidity = '50%'; // 예시 데이터
      this.localEnvironment.co2 = '400ppm'; // 예시 데이터
    },
    // 양액 및 재배현황 데이터 가져오기
    fetchCultivationStatus() {
      // 여기에 양액 및 재배현황 데이터를 가져오는 로직을 추가하세요.
      // 예를 들어 axios.get을 사용한 API 호출 등
      axios.get('api.nfc-scm.com/plant/batchinfo/2022-01-01/2022-01-31')
  .then(response => {
    // response.data를 사용하거나 해당 데이터로 작업을 수행합니다.
    console.log(response.data);
    this.cultivation.ec = '2.0'; // 예시 데이터
    this.cultivation.ph = '6.2'; // 예시 데이터
    this.cultivation.crop = '버터헤드레터스'; // 예시 데이터
    this.cultivation.cultivationDays = '30일'; // 예시 데이터
  })
  .catch(error => {
    console.error('재배현황 API 호출 에러:', error);
  });
    }
  }
};
</script>

<style scoped>
.dashboard {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.dashboard-background {
  position: absolute;
  width: 100%;
  height: 100%;
  /* 배경 이미지 경로를 올바르게 수정하세요. */
  background-image: url('@/assets/PlantFarm.jpg');
  background-size: cover;
  background-position: center;
  z-index: -1;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 20px;
}

.table {
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px; /* 표의 padding을 조정하여 크기를 조절 */
}

.table-header {
  font-weight: bold;
  font-size: 1.2rem;
  padding: 10px;
  background-color: #f0f0f0;
  border-bottom: 1px solid #ccc;
  text-align: center; /* 제목 가운데 정렬 */
}

.table-row {
  display: flex;
  align-items: center; /* 셀 내용 세로 가운데 정렬 */
  justify-content: space-between; /* 셀 내용 가로 정렬 */
  border-bottom: 1px solid #ccc;
}

.table-cell {
  flex: 1;
  padding: 10px;
  font-size: 1.1rem; /* 테이블 셀 텍스트 크기 설정 */
  text-align: center; /* 테이블 셀 가운데 정렬 */
}
</style>