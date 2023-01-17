const diagnosisChart = document.getElementById('diagnosisChart')

const diagnosisData ={
  labels: ['Hemophilia', 'Factor 1', 'Factor 2', 'Other', 'Factor3','Factor4','Factor5','Factor6','Factor7'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [100,200,150,40,50,90,500,600,2],
      backgroundColor: ["#ea5545", "#f46a9b", "#ef9b20", "#edbf33", "#ede15b", "#bdcf32", "#87bc45", "#27aeef", "#b33dc6"],
    }
  ]
};

const diagnosisChartConfig = {
  type: 'pie',
  data: diagnosisData,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: window.innerWidth >768 ? 'left': 'bottom',
      },
        title: {
          display: false, 
        }
      }
    },
  };
  
  new Chart (diagnosisChart,diagnosisChartConfig)
  
  
  const patientsDataChart = document.getElementById('patientsDataChart')

  const patientsData = {
    labels: ['Hemophilia', 'Factor 1', 'Factor 2', 'Other', 'Factor3','Factor4','Factor5','Factor6','Factor7'],
    datasets: [
      {
        label: "Ages",
        data: [100,200,150,40,50,90,500,600,222],
        // backgroundColor: ["#ea5545", "#f46a9b", "#ef9b20", "#edbf33", "#ede15b", "#bdcf32", "#87bc45", "#27aeef", "#b33dc6"],
      }
    ]
  }

const patientsDataConfig =   {
  type: 'bar',
  data: patientsData,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false, 
      }
    }
  },
};

  new Chart (patientsDataChart,patientsDataConfig)
