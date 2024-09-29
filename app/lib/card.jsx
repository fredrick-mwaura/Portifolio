import React from 'react';

const Card = ({src, title, content }) => {
  return (
      <div
          className="bg-amber-200 shadow-lg rounded-lg p-4 transition-transform duration-300 transform hover:translate-y-2 hover:bg-blue-50 sm:shadow-xl md:shadow-2xl">
            <img src={src} alt='icon'/>
          <h3 className="text-lg font-bold text-green-950 mt-2">{title}</h3>
          <p className="text-green-950">{content}</p>
      </div>
  );
};

const Cardi = () => {
    return (
        <div className="flex flex-wrap justify-between">
      <div className="w-full md:w-1/2 lg:w-1/4 mb-4">
        <Card src="https://shorturl.at/r3CQt" title="Collaboration" content="Full-stack development thrives
              in team environments, where designers, developers, and stakeholders work together to create cohesive,
              user-focused products. Open communication and synergy within the team foster creativity,
              leading to the effective execution of ideas and solutions that truly meet users' needs." />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 mb-4 transform translate-y-2">
        <Card src="https://shorturl.at/THFjJ" title="smart work" content=" amplifies productivity by focusing on efficiency
        and leveraging best practices. It's about using tools like Docker for smoother development cycles,
        adopting clean coding practices, and automating repetitive tasks. Smart work allows developers to
        achieve high-quality results without unnecessary effort, optimizing both time and resources." />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 mb-4">
        <Card src="https://shorturl.at/5A5qx" title="collaboration" content="Full-stack development thrives
              in team environments, where I collaborate with other developers to create cohesive,
              user-focused products. Open communication and synergy within the team foster creativity,
              leading to the effective execution of ideas and solutions that truly meet users' needs." />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 mb-4 transform translate-y-2">
        <Card src="https://shorturl.at/jkuom" title="Dedication" content="Being dedicated to role in development ensures excellent
              of a project to its final release.
               It requires a strong commitment to quality,
              whether refining code or ensuring seamless integration between the front-end and back-end.
              A dedicated developer doesn't just meet requirements; they exceed expectations." />
      </div>
    </div>
  );
};

export default Cardi;