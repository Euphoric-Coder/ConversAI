import React, { useState, useEffect, useRef } from 'react';
import { assets } from '@/assets/assets';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

const Main: React.FC = () => {
  const [isListening, setIsListening] = useState<boolean>(false);
  const { transcript, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  const [inputText, setInputText] = useState<string>('');
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null); // Ref for the textarea element

  // Effect to stop listening after 5 seconds of inactivity
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isListening) {
      timeout = setTimeout(() => {
        setIsListening(false);
        SpeechRecognition.stopListening();
      }, 5000); // Stop after 5 seconds
    }
    return () => clearTimeout(timeout);
  }, [isListening]);

  // Function to handle start/stop listening
  const startListening = () => {
    if (!isListening) {
      resetTranscript(); // Clear previous transcript
      SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
      setIsListening(true);
    } else {
      SpeechRecognition.stopListening();
      setIsListening(false);
    }
  };

  // Update the input field with the transcript
  useEffect(() => {
    setInputText(transcript);
  }, [transcript]);

  // Function to auto-resize the textarea
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto'; // Reset the height
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`; // Set height based on scroll height
    }
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini clone</p>
        <img src={assets.user_icon} alt="User Icon" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, User</span>
          </p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>
              Suggest me some Beautiful Places to go on an upcoming road trip
            </p>
            <img src={assets.compass_icon} alt="Compass Icon" />
          </div>
          <div className="card">
            <p>Briefly summarize this concept: CSE vs Data Science</p>
            <img src={assets.bulb_icon} alt="Bulb Icon" />
          </div>
          <div className="card">
            <p>
              Brainstorm some Strategies that are needed for Professional Growth
            </p>
            <img src={assets.message_icon} alt="Message Icon" />
          </div>
          <div className="card">
            <p>Write a Python Code to print an Inverted Star Pattern</p>
            <img src={assets.code_icon} alt="Code Icon" />
          </div>
        </div>

        <div className="main-bottom">
          <div className="search-box p-3">
            <div className="textarea-wrapper">
              <textarea
                ref={textAreaRef}
                value={inputText}
                placeholder="Enter your Prompt...."
                className="input-field"
                onChange={handleTextChange}
                rows={1}
              />
              <div className="icons">
                <img src={assets.gallery_icon} alt="Image Upload Icon" />
                <img
                  src={assets.mic_icon}
                  alt="Voice Input Icon"
                  className={`cursor-pointer ${
                    isListening
                      ? 'animate-pulse ring-2 ring-indigo-500 rounded-full'
                      : ''
                  }`}
                  onClick={startListening}
                />
                <img src={assets.send_icon} alt="Send Prompt Icon" />
              </div>
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your Privacy to us is absolute.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
