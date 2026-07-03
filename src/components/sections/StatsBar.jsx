import { stats } from '../../data/stats';
import './StatsBar.css';

const StatsBar = () => {
  return (
    <section className="stats">
      <div className="container stats__inner">
        {stats.map((stat) => (
          <div className="stats__item" key={stat.id}>
            <div className="stats__value">{stat.value}</div>
            <div className="stats__label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
