import React, { useState } from 'react';
import { assets } from '@/assets/assets'

const Sidebar: React.FC = () => {
  const [extended, setExtended] = useState<boolean>(false);

  return (
    <div
      className={`sidebar ${
        extended ? 'expanded' : 'collapsed'
      } transition-all duration-500 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)]`}
    >
      <div className="top">
        <img
          onClick={() => setExtended((prev) => !prev)}
          src={assets.menu_icon}
          alt="Menu Icon"
          className="menu transition-all duration-500 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)]"
        />
        <div className="new-chat group transition-all duration-500 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] hover:cursor-pointer">
          <img
            src={assets.plus_icon}
            alt="Plus Icon"
            className="transition-transform duration-300 ease-in-out group-hover:rotate-90"
          />
          <p
            className={`transition-all duration-500 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] ${
              extended ? 'opacity-100' : 'opacity-0'
            }`}
          >
            New Chat
          </p>
        </div>
        {extended ? (
          <div className="recent transition-all duration-500 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)]">
            <p className="recent-title transition-all duration-500 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)]">
              Recent
            </p>
            <div className="recent-entry transition-all duration-500 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)]">
              <img
                src={assets.message_icon}
                alt="Message Icon"
                className="transition-all duration-500 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)]"
              />
              <p
                className={`transition-all duration-500 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] ${
                  extended ? 'opacity-100' : 'opacity-0'
                }`}
              >
                What is React ...
              </p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="bottom transition-all duration-500 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)]">
        {/* Group for Question Icon (Pulse Effect) */}
        <div className="bottom-item recent-entry group transition-all duration-500 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] hover:cursor-pointer">
          <img
            src={assets.question_icon}
            alt="Question Icon"
            className="transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
          <p
            className={`transition-all duration-500 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] ${
              extended ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Help
          </p>
        </div>

        {/* Group for History Icon (Bounce Effect) */}
        <div className="bottom-item recent-entry group transition-all duration-500 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] hover:cursor-pointer">
          <img
            src={assets.history_icon}
            alt="History Icon"
            className="transition-transform duration-300 ease-in-out group-hover:translate-y-[-5px]"
          />
          <p
            className={`transition-all duration-500 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] ${
              extended ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Activity
          </p>
        </div>

        {/* Group for Settings Icon (Rotate Effect) */}
        <div className="bottom-item recent-entry settings group transition-all duration-500 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] hover:cursor-pointer">
          <img
            src={assets.setting_icon}
            alt="Settings Icon"
            className="transition-transform duration-300 ease-in-out group-hover:rotate-90"
          />
          <p
            className={`transition-all duration-500 ease-[cubic-bezier(0.25, 0.1, 0.25, 1)] ${
              extended ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Settings
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
