import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import './Twitter.css';

const tweetsData = [
    {
      companyName: "Logo & Company",
      imageUrl: "https://pbs.twimg.com/profile_images/1727262461257256960/ASC7j6A7_400x400.jpg",
      message: "Exciting to see Sustally leading the way in sustainable business practices – a game-changer for companies looking to quantify and enhance their impact! #Sustally",
      name: "Harshitha",
      year: "Nov 22, 2023",
      time: "3:23 PM",
      twitterLink: "https://twitter.com/AthmakuruH4274"
    },
    {
        companyName: "Logo & Company",
        imageUrl: "https://pbs.twimg.com/profile_images/1287636814673543168/ZXWFx1Zw_400x400.jpg",
        message: "🌱 Sustally revolutionizes business sustainability, quantifying impact through SAAS for a greener future. #Sustally #SustainabilityRevolution",
        name: "Pavan Kalyan Gojju",
        year: "Nov 22, 2023",
        time: "2:33 PM",
        twitterLink: "https://twitter.com/PavanGojju"
    },
    {
        companyName: "Logo & Company",
        imageUrl: "https://pbs.twimg.com/profile_images/1727275618470072320/XfcY2iTE_400x400.jpg",
        message: "#Sustally's founder, @AnithaChinnasamy, brings over 14 years of expertise to leverage technology and promote ESG factors in startups – a true visionary in the sustainability space! 👏🌟 #SustallyFounder #SustainabilityVisionary",
        name: "Chandrakala M",
        year: "Nov 22, 2023",
        time: "4:10 PM",
        twitterLink: "https://twitter.com/Chandrakal17748"
    },
    {
        companyName: "Logo & Company",
        imageUrl: "https://pbs.twimg.com/profile_images/1651268972980084736/MCChxnLo_400x400.jpg",
        message: "#Sustally is not just a product; it's a movement towards growth vs. development, encouraging businesses to choose the path that leads to a better place for the planet and its people.",
        name: "Samara",
        year: "Nov 22, 2023",
        time: "11:13 PM",
        twitterLink: "https://twitter.com/SamarReddy29"
    },
    {
        companyName: "Logo & Company",
        imageUrl: "https://pbs.twimg.com/profile_images/1727381545856782336/vCqDrCbF_400x400.png",
        message: "Explore #Sustally's commitment to a satisfying journey of growth, development, and positive impact – a must-join for businesses aiming for a sector-agnostic concept.",
        name: "s muneera",
        year: "Nov 22, 2023",
        time: "11:45 PM",
        twitterLink: "https://twitter.com/smuneera253"
    },
  ];

function Twitter() {
  const [darkMode, setDarkMode] = useState(false);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [storyText, setStoryText] = useState("");
  const [postUrl, setPostUrl] = useState("");
  const [sharedStories, setSharedStories] = useState([]);
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [hideShareButton, setHideShareButton] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleShare = (e) => {
    e.preventDefault();
    const newName = name.trim();
    const newCompany = company.trim();
    const newStory = storyText.trim();
    const newPostUrl = postUrl.trim();

    if (newName !== "" && newCompany !== "" && (newStory !== "" || newPostUrl !== "")) {
      const updatedStories = [...sharedStories, { name: newName, company: newCompany, story: newStory, postUrl: newPostUrl }];
      setSharedStories(updatedStories);
      setStoryText("");
      setName("");
      setCompany("");
      setPostUrl("");

      // Save updated stories to localStorage
      localStorage.setItem("sharedStories", JSON.stringify(updatedStories));

      // Log to console
      console.log("Name:", newName);
      console.log("Company:", newCompany);
      console.log("Story:", newStory);
      console.log("Post URL:", newPostUrl);

      // Show user details popup
      setShowUserDetails(true);

      // Hide the "Share" button
      setHideShareButton(true);
    
    } else {
      alert("Please fill in all required fields.");
      return;
    }
  };

  const closePage = () => {
    setShowUserDetails(false);
    setHideShareButton(false);
  };

  const shareStory = (e) => {
    e.preventDefault();
    setShowUserDetails(true);
    setHideShareButton(true);
  };

  useEffect(() => {
    // Load shared stories from localStorage on component mount
    const storedStories = localStorage.getItem("sharedStories");
    if (storedStories) {
      setSharedStories(JSON.parse(storedStories));
    }
  }, []);

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        <div>
            <div className={`navbar ${darkMode ? "dark-mode" : "light-mode"}`}>
                {/* <h1>Sustally</h1> */}
                <div className="toggle-btn-container">
                    <button className="toggle-btn" onClick={toggleDarkMode}>
                        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                    </button>
                </div>
            </div>
        </div>
        <div className="bannerimage">
            <h1 className="Banner">User Experiences</h1>
        </div>
        <div className="body">
            <div className="Testimonial">
                <h2 className="head">Testimonials</h2>
                <p className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
            </div>
            <div>
                <marquee bahaviour="scroll" direction="up" className="mainlayout slow-scroll">
                    <div className="container">
                        {tweetsData.map((tweet, index) => (
                            <div key={index} className="layout">
                                <div className="margin">
                                    <div className="Header">
                                        <div className="header">
                                            <h3 className="logo">{tweet.companyName}</h3>
                                            <img className="images" src={tweet.imageUrl} alt="" />
                                        </div>
                                    </div>
                                    <div className="color">
                                        <div>
                                            <p className="message">{tweet.message}</p>
                                        </div>
                                        <div className="border">
                                            <p className="name">{tweet.name}</p>
                                        </div>
                                        <div className="timing">
                                            <p className="year">{tweet.year}</p>
                                            <p className="time">{tweet.time}</p>
                                        </div>
                                        <div className="readbtn">
                                            <a href={tweet.twitterLink}>
                                                <button className="morebtn">
                                                    <img className="twittericon" src="https://www.sarkarinaukriexams.com/images/import/sne33227444012.png" alt="twittericon" />
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </marquee>
            </div>
        </div>
        <div id="Body">
            <div className="Contactus">
                {/* Only show the "Share" button if user details are not displayed */}
                {!showUserDetails && (
                    <div className="contact" onClick={() => setShowUserDetails(true)}>
                        <p className="SHARE">Share</p>
                    </div>
                )}
            </div>
            {showUserDetails && (
                <div className="circle">
                    <div className="alldetails">
                        <img className="deleteicon" src="https://t4.ftcdn.net/jpg/01/07/62/07/240_F_107620795_jf59LrknkkRohC0fxG1VTFVSuKJmXzp7.jpg" alt="Delete" onClick={() => setShowUserDetails(false)} /> <br />
                        <div>
                            <form action="" className="details">
                                <div className="input-field">
                                    <input type="text" id="name" required value={name} onChange={(e) => setName(e.target.value)} />
                                    <label for="name">User name:</label>
                                </div>

                                <div className="input-field">
                                    <input type="text" id="company" required value={company} onChange={(e) => setCompany(e.target.value)} />
                                    <label for="company">Company name:</label>
                                </div>

                                <div className="input-field">
                                    <textarea type="text" id="address" required value={storyText} onChange={(e) => setStoryText(e.target.value)} ></textarea>
                                    <label for="address">Add Comment:</label>
                                </div>

                                <p><span className="TEXT">or</span></p>

                                <div className="input-field">
                                    <input type="url" id="commentUrl" required value={postUrl} onChange={(e) => setPostUrl(e.target.value)} />
                                    <label for="commentUrl">Comment URL:</label>
                                </div>

                                <button onClick={handleShare} className="sharebtn">Submit</button>
                    
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
  );
}

export default Twitter;