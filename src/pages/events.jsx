import '../css/events.css'
function Events() {
  const events = [
  {
    id: 1,
    title: "Annual Tech Symposium 2025",
    date: "May 20, 2025",
    venue: "Auditorium Block A",
    description: "Join us for our annual tech symposium featuring expert talks, live demos, and student showcases.",
    image: "https://picsum.photos/600/300?random=1",
  },
  {
    id: 2,
    title: "National Hackathon",
    date: "June 5-6, 2025",
    venue: "Computer Science Lab",
    description: "48-hour coding challenge for developers, designers, and innovators across India.",
    image: "https://picsum.photos/600/300?random=2",
  },
  {
    id: 3,
    title: "Cultural Extravaganza",
    date: "July 1, 2025",
    venue: "Open Air Theatre",
    description: "A celebration of colors, traditions, and talent with music, dance, and drama.",
    image: "https://picsum.photos/600/300?random=3",
  },
  {
    id: 4,
    title: "Green Campus Drive",
    date: "July 15, 2025",
    venue: "College Garden",
    description: "Join hands in making our campus greener with plantation activities and awareness rallies.",
    image: "https://picsum.photos/600/300?random=4",
  },
  {
    id: 5,
    title: "Alumni Interaction 2025",
    date: "August 10, 2025",
    venue: "Seminar Hall",
    description: "Hear from our successful alumni about career paths and college memories.",
    image: "https://picsum.photos/600/300?random=5",
  },
  {
    id: 6,
    title: "Research Paper Presentation",
    date: "August 30, 2025",
    venue: "Library Auditorium",
    description: "Students and faculty present their latest academic and scientific research papers.",
    image: "https://picsum.photos/600/300?random=6",
  }
];

  return (
    <div className="events-container">
 <section className="college-events">
      <div className="events-header">
        <h2>College Events</h2>
        <p>Stay updated with our latest academic and cultural happenings</p>
      </div>

      <div className="events-grid">
        {events.map((event) => (
          <div className="event-card" key={event.id}>
            <img src={event.image} alt={event.title} className="event-img" />
            <div className="event-info">
              <h3>{event.title}</h3>
              <p className="event-meta"><strong>Date:</strong> {event.date}</p>
              <p className="event-meta"><strong>Venue:</strong> {event.venue}</p>
              <p className="event-desc">{event.description}</p>
              <a href="#" className="event-link">Read More →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}
export default Events;