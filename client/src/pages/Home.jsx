import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      title: 'DÉTECTEUR DE PROJETS',
      path: '/project-detector',
      icon: '🔍',
      description: 'Découvrez de nouveaux projets prometteurs'
    },
    {
      title: 'VISUALISATION',
      path: '/visualization',
      icon: '📊',
      description: 'Analysez les données du marché'
    },
    {
      title: 'SUIVI WALLET',
      path: '/wallet-tracking',
      icon: '👛',
      description: 'Suivez vos portefeuilles'
    },
    {
      title: 'ALERTES PROJET',
      path: '/project-alerts',
      icon: '🔔',
      description: 'Restez informé des opportunités'
    }
  ];

  return (
    <div className="home-container">
      <div className="menu-grid">
        {menuItems.map((item) => (
          <div
            key={item.path}
            className="menu-item"
            onClick={() => navigate(item.path)}
          >
            <div className="menu-icon">{item.icon}</div>
            <div className="menu-item-content">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;