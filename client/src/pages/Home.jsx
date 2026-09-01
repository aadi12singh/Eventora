import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../utils/axios";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaSearch,
  FaRegClock,
  FaTicketAlt,
  FaShieldAlt,
} from "react-icons/fa";

const Home = () => {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchEvents();
    }, 400);

    return () => clearTimeout(timeoutId);
  }, [search, category]);

  const fetchEvents = async () => {
    try {
      const { data } = await api.get(
        `/events?search=${search}&category=${category}`,
      );
      setEvents(data);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-black text-white rounded-3xl overflow-hidden mb-12 shadow-2xl">
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=3000&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>

        <div className="relative p-10 md:p-20 text-center flex flex-col items-center z-10">
          <span className="bg-white/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase mb-6">
            Welcome to Eventora
          </span>

          <h1 className="text-5xl md:text-7xl font-black mb-6">
            Find Your Next <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
              Unforgettable
            </span>{" "}
            Experience
          </h1>

          <p className="text-gray-300 mb-10 max-w-2xl">
            Discover the best tech conferences, music festivals, and workshops
            happening near you.
          </p>

          {/* Search */}
          <div className="w-full max-w-2xl relative flex items-center">
            <FaSearch className="absolute left-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search events by title..."
              className="w-full pl-12 pr-4 py-4 rounded-full text-black"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Why Choose Us / Features row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 transition duration-300">
          <div className="w-16 h-16 bg-gray-900 text-white rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-md shadow-gray-200/50">
            <FaRegClock />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Booking</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Secure your tickets instantly with our fast streamlined booking
            infrastructure built for speed.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 transition duration-300">
          <div className="w-16 h-16 bg-gray-900 text-white rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-md shadow-gray-200/50">
            <FaTicketAlt />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Seamless Access
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Download tickets instantly or manage them right from your personal
            dashboard with easily.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:-translate-y-1 transition duration-300">
          <div className="w-16 h-16 bg-gray-900 text-white rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-md shadow-gray-200/50">
            <FaShieldAlt />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Secure Platform
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            All transactions and registrations are bounded by cutting-edge
            security and 2FA OTP tech.
          </p>
        </div>
      </div>
      {/* Header + Category Filter */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 px-2 border-b pb-4 gap-4">
        <h2 className="text-3xl font-extrabold">Upcoming Events</h2>

        <div className="flex items-center gap-4">
          {/* ✅ Category Dropdown */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-4 py-2 border rounded-lg"
          >
            <option value="">All Categories</option>
            <option value="Music">Music</option>
            <option value="Tech">Tech</option>
            <option value="Workshop">Workshop</option>
            <option value="Sports">Sports</option>
            <option value="Business">Business</option>
          </select>

          <div className="text-gray-500">{events.length} results found</div>
        </div>
      </div>

      {/* Events */}
      {loading ? (
        <div className="text-center py-20">Loading events...</div>
      ) : events.length === 0 ? (
        <div className="text-center py-20">No events found</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {events.map((event) => (
            <div
              key={event._id}
              className="bg-white rounded-xl shadow hover:shadow-lg"
            >
              <div className="h-48 bg-gray-200">
                {event.image ? (
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    {event.category}
                  </div>
                )}
              </div>

              <div className="p-4">
                <p className="text-xs text-gray-500">{event.category}</p>

                <h2 className="font-bold text-lg">{event.title}</h2>

                <div className="text-sm text-gray-600 mt-2 space-y-1">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt />
                    {new Date(event.date).toLocaleDateString()}
                  </div>

                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt />
                    {event.location}
                  </div>
                </div>

                <Link
                  to={`/events/${event._id}`}
                  className="block mt-4 text-center bg-gray-100 py-2 rounded hover:bg-gray-200"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Footer */}
      <footer className="mt-auto pt-16 pb-8 border-t border-gray-200 text-center">
        <div className="flex justify-center items-center gap-2 mb-4">
          <FaTicketAlt className="text-gray-800 text-2xl" />
          <span className="text-xl font-bold text-gray-900">Eventora</span>
        </div>

        <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
          The simplest, most dynamic way to manage, discover, and host
          world-class events in your local city.
        </p>

        <div className="text-xs text-gray-400">
          © {new Date().getFullYear()} Eventora Platform
        </div>
      </footer>
    </div>
  );
};

export default Home;
