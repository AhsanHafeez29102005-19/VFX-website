import { stats } from '../../data/stats';
import { Icon } from '../common/Icons';
import './StatsBar.css';

const StatsBar = () => {
  return (
    <section className="stats">
      <div className="container stats__inner">
        {stats.map((stat) => {
          const StatIcon = Icon[stat.icon] || Icon.Award;
          return (
            <div className="stats__item" key={stat.id}>
              <div className={`stats__icon icon-hex stats__icon--${stat.color}`}>
                <StatIcon width={18} height={18} />
              </div>
              <div>
                <div className="stats__value">{stat.value}</div>
                <div className="stats__label">{stat.label}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StatsBar;
