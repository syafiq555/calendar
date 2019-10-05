new Vue({
  el: '#planner',
  data() {
    return {
      calendarData: [],
      currentMonth: null,
      YEAR: null
    }
  },
  mounted: async function () {
    const today = new Date()
    this.currentMonth = today.getMonth() + 1
    this.YEAR = today.getFullYear()
    this.getData()
  },
  methods: {
    next: function () {
      if (this.currentMonth == 12) {
        this.currentMonth = 1
        this.YEAR++
      }
      else
        this.currentMonth++
      this.calendarData = []
      this.getData()
    },
    getData: async function () {
      const API_URL = 'http://api.aladhan.com/v1/gToHCalendar';
      const res = await fetch(`${API_URL}/${this.currentMonth}/${this.YEAR}`)
      const data = await res.json()
      this.calendarData.push(data.data)
    }
  },
})