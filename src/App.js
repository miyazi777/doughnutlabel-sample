import 'chartjs-plugin-doughnutlabel';
import { Doughnut } from 'react-chartjs-2';

function App() {

  const graphdata = {
    datasets: [
      {
        data: [15, 25, 35],
        backgroundColor: ['#B9D8F7', '#FFE5EC', '#DEDFE0'],
      },
    ],
    labels: ['item1', 'item2', 'item3'],
  };

  const doughnutOptions = {
    legend: {
      display: false,
    },
    plugins: {
      doughnutlabel: {
        labels: [
          {
            text: 'ITEMS',
            color: '#666666',
            font: {
              size: 30,
            },
          },
          {
            text: 'TEST',
            color: '#888888',
          },
        ],
      },
    },
  };

  return (
    <div>
      <p>Doughnut graph sample</p>
      <div>
        <Doughnut data={graphdata} options={doughnutOptions} />
      </div>
    </div>
  );
}

export default App;
