import React, { useState } from 'react';

const Modal = ({ show, onClose, news }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="btn btn-close" onClick={onClose}>Close</button>
        <h5 className="modal-title text-info">{news.title}</h5>
        <p>{news.fullDescription}</p>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [selectedNews, setSelectedNews] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const newsData = [
    {
      title: 'New Semester Begins!',
      summary: 'The new semester starts next week! Make sure to check your updated schedule and be prepared for the new classes.',
      fullDescription: 'The new semester will officially begin on January 10th. All students should ensure they have checked their updated schedules. New courses have been added, and some old ones have been updated. Stay prepared and ready for the first day of classes!'
    },
    {
      title: 'Upcoming Exams',
      summary: 'Don\'t forget that your first set of exams will take place at the end of this month. Stay prepared and review your subjects.',
      fullDescription: 'Your exams will start on January 25th and will continue for the next two weeks. Make sure to review your notes and attend all revision sessions. The exam schedule will be available on the portal next week.'
    },
    {
      title: 'New Rewards in Store!',
      summary: 'We have added new rewards to the store. Check out the latest items you can redeem with your points.',
      fullDescription: 'The rewards store has updated its inventory! New items include gadgets, gift cards, and extra credits for online courses. Be sure to check them out and redeem your hard-earned points before they run out!'
    }
  ];

  const handleNewsClick = (newsIndex) => {
    setSelectedNews(newsData[newsIndex]);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedNews(null);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center text-primary">Welcome to your School Portal!</h1>
      <p className="text-center text-muted">Navigate through the sections to see your schedule, grades, and rewards store.</p>
      
      <div className="news-section mt-5">
        <h2 className="text-primary">Latest News</h2>
        <div className="news-cards">
          {newsData.map((news, index) => (
            <div className="card shadow-sm mb-3" key={index}>
              <div className="card-body">
                <h5 className="card-title text-info">{news.title}</h5>
                <p className="card-text">{news.summary}</p>
                <button
                  onClick={() => handleNewsClick(index)}
                  className="btn btn-primary"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        show={isModalOpen}
        onClose={handleCloseModal}
        news={selectedNews}
      />
    </div>
  );
};

export default Dashboard;
