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
      this.localEnvironment.temperature = '25°C'; // 예시 데이터
      this.localEnvironment.humidity = '50%'; // 예시 데이터
      this.localEnvironment.co2 = '400ppm'; // 예시 데이터
    },
    // 양액 및 재배현황 데이터 가져오기
    fetchCultivationStatus() {
      axios.get('http://localhost:3000/data') // 올바른 서버 URL로 요청
        .then(response => {
          const data = response.data;
          this.cultivation.crop = data[0].작물; // 예시로 첫 번째 행의 '작물' 컬럼 데이터를 사용
          this.cultivation.cultivationDays = data[0].재배일수; // 예시로 첫 번째 행의 '재배일수' 컬럼 데이터를 사용
        })
        .catch(error => {
          console.error('엑셀 데이터 API 호출 에러:', error);
        });
    }
  }
};
</script>
