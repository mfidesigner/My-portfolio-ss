import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Instagram, Linkedin, Youtube, Twitter, Dribbble, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Index = () => {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  
  return <div className="min-h-screen bg-portfolio-dark text-white">
      {/* Header */}
      <header className="bg-portfolio-gray/80 backdrop-blur-md fixed w-full z-50 border-b border-portfolio-light">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                <span className="text-portfolio-dark font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-medium text-white tracking-wide">SIBAM</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-portfolio-orange transition-colors">Home</a>
              <a href="#services" className="hover:text-portfolio-orange transition-colors">Services</a>
              <a href="#portfolio" className="hover:text-portfolio-orange transition-colors">Portfolio</a>
              <a href="#about" className="hover:text-portfolio-orange transition-colors">About</a>
              <a href="#contact" className="hover:text-portfolio-orange transition-colors">Contact</a>
            </nav>
            <Button className="bg-portfolio-orange hover:bg-portfolio-orange/80 text-white">
              Let's Talk
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
                I'm <span className="text-portfolio-orange">Sibam Sahu</span>,<br />
                <span className="bg-gradient-to-r from-portfolio-purple to-portfolio-red bg-clip-text text-transparent">
                  Graphic Designer
                </span> & Freelancer
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed animate-fade-in [animation-delay:0.3s]">
                Creative and detail-oriented Graphic Designer with over 4 years of experience in branding, motion graphics, and digital design
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in [animation-delay:0.6s]">
                <Button className="bg-portfolio-orange hover:bg-portfolio-orange/80 hover:scale-105 text-white text-lg px-8 py-3 transform transition-all duration-300">
                  Hire Me
                </Button>
                <Button variant="outline" className="border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple hover:text-white hover:scale-105 text-lg px-8 py-3 transform transition-all duration-300">
                  Download CV
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-2 animate-fade-in">
                  <MapPin className="w-4 h-4 text-portfolio-orange" />
                  Balangir, Odisha, India
                </span>
                <span className="flex items-center gap-2 animate-fade-in [animation-delay:0.2s]">
                  <Mail className="w-4 h-4 text-portfolio-orange" />
                  sibamsahu.design@gmail.com
                </span>
                <span className="flex items-center gap-2 animate-fade-in [animation-delay:0.4s]">
                  <Phone className="w-4 h-4 text-portfolio-orange" />
                  +91-9348562817
                </span>
              </div>
            </div>
            <div className="flex justify-center animate-scale-in [animation-delay:0.9s]">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-portfolio-orange via-portfolio-purple to-portfolio-red p-1 animate-pulse">
                  <div className="w-full h-full rounded-full bg-portfolio-gray flex items-center justify-center">
                    <img src="https://postimage.me/images/2025/06/06/image.jpg" alt="Sibam Sahu" className="w-72 h-72 rounded-full object-cover object-center hover:scale-105 transition-transform duration-300" />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-portfolio-orange rounded-full p-4 animate-bounce-slow">
                  <span className="text-2xl">🎨</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 px-6 bg-portfolio-gray/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-400 mb-8">Trusted By</h2>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {[
                { name: "Mutual Fund India", logo: "https://photos.fife.usercontent.google.com/pw/AP1GczMAXXvbyqF4mggBoZ2TmlYgvRoukojj0qPFvkULL4P22ofB0hZiG8Af6qt4Hf-Y9rFl6Q4vVHGyK-Y272nXC7BnRYPzkw=w600-h600-s-no-gm?authuser=0" },
                { name: "Craving for Makeup", logo: "https://photos.fife.usercontent.google.com/pw/AP1GczML9_AWInSvDccL50qlVWSI4l_Bmw0bK5S82eDmhCuoVA0QN49knx64X3ezvpwdIuVncSJxLjKa4RUkaPdTkPEXVumheg=w1920-h872-s-no-gm?authuser=0" },
                { name: "Swastik Jewelers", logo: "https://photos.fife.usercontent.google.com/pw/AP1GczNPAVKjNSFCeH8hEU8iRKpe3Q-DvGBrLhnawyjb8esYKxnT6lQwieTsT1qulbAOGCo2o9nZiz7momhRB2smbG5hNhgx_Q=w929-h945-s-no-gm?authuser=0" },
                { name: "Ably Info Solutions", logo: "https://photos.fife.usercontent.google.com/pw/AP1GczPbxd71Q8goEGD2OsxVkDdMm6__WuhzZcFlEOUXSsxRuM9LSGBILKlI21fHNEYjiGU1utp2-VJ7tzQHJxlC2YOomsaRLg=w1920-h771-s-no-gm?authuser=0" },
                { name: "Shemfort School", logo: "https://photos.fife.usercontent.google.com/pw/AP1GczMLpLMFTHU5doz37ql2o1GcnNhJGw9TNqBef2AWD_W-9EK8PgbcaSsBZTnqSBEP9phQ3WfpgfKjo9Vd9oaLKST9KFKuAw=w1337-h945-s-no-gm?authuser=0" }
              ].map((company, i) => 
                <div key={i} className="w-40 h-16 bg-white/10 rounded-lg flex items-center justify-center overflow-hidden p-2 hover:bg-white/20 transition-colors">
                  <img src={company.logo} alt={company.name} className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-60 hover:opacity-100 transition-opacity" />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">
                Get a design that makes your <span className="text-portfolio-orange">brand unforgettable</span>
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                Creative and detail-oriented Graphic Designer with over 4 years of experience in delivering high-impact visual designs across digital, branding, and motion graphics. Proficient in Adobe Photoshop, Illustrator, After Effects, and Canva. Skilled in freelancing, brand collaboration, and part-time roles for educational and corporate institutions.
              </p>
              <Button className="bg-portfolio-purple hover:bg-portfolio-purple/80 text-white text-lg px-8 py-3">
                Hire Me
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-portfolio-purple/20 to-portfolio-orange/20 rounded-3xl p-8 h-96 flex items-center justify-center overflow-hidden">
                <div className="grid grid-cols-2 gap-8 animate-pulse">
                  <div className="w-20 h-20 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold text-lg animate-float">
                    PS
                  </div>
                  <div className="w-20 h-20 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-lg animate-float [animation-delay:0.5s]">
                    AI
                  </div>
                  <div className="w-20 h-20 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg animate-float [animation-delay:1s]">
                    AE
                  </div>
                  <div className="w-20 h-20 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-lg animate-float [animation-delay:1.5s]">
                    FG
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center text-white font-bold animate-bounce">
                  CV
                </div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold animate-spin [animation-duration:3s]">
                  XD
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-portfolio-gray/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">My <span className="text-portfolio-orange">Services</span></h2>
            <p className="text-gray-400 text-lg">What I can do for you</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[{
            title: "Graphic & Brand Design",
            icon: "🎨",
            desc: "Complete brand identity and visual design solutions"
          }, {
            title: "Motion Graphics & Reels",
            icon: "🎬",
            desc: "Engaging animated content and social media reels"
          }].map((service, index) => <Card key={index} className="bg-portfolio-light border-portfolio-light hover:border-portfolio-orange transition-all duration-300 hover:transform hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
                  <p className="text-gray-400">{service.desc}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Why Hire Me Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold">
                Why <span className="text-portfolio-purple">Hire Me?</span>
              </h2>
              <p className="text-gray-300 text-lg">
                Reliable, creative, and trend-savvy—delivering high-quality designs that elevate brands, engage audiences, and meet deadlines with precision. Over 4 years of experience in digital, branding, and motion graphics.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center animate-fade-in-up [animation-delay:0.3s]">
                  <div className="text-3xl font-bold text-portfolio-orange mb-2 transform hover:scale-110 transition-transform">4+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
                <div className="text-center animate-fade-in-up [animation-delay:0.5s]">
                  <div className="text-3xl font-bold text-portfolio-purple mb-2 transform hover:scale-110 transition-transform">45+</div>
                  <div className="text-gray-400">Clients</div>
                </div>
                <div className="text-center animate-fade-in-up [animation-delay:0.7s]">
                  <div className="text-3xl font-bold text-portfolio-red mb-2 transform hover:scale-110 transition-transform">150+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-portfolio-purple via-portfolio-orange to-portfolio-red p-1">
                  <div className="w-full h-full rounded-full bg-portfolio-gray flex items-center justify-center">
                    <img src="https://postimage.me/images/2025/06/06/image.jpg" alt="Sibam Sahu" className="w-72 h-72 rounded-full object-cover object-center" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Work <span className="text-portfolio-orange">Experience</span></h2>
            <p className="text-gray-400 text-lg">My professional journey and achievements</p>
          </div>
          <div className="space-y-8">
            {[{
            title: "Graphic Designer (Part-Time)",
            company: "Ably Info Solutions",
            period: "Nov 2022 – Present",
            location: "Balangir, Odisha",
            tasks: ["Designed branded assets and web graphics for digital services", "Supported UI/UX concepts with illustrations and layout visuals"]
          }, {
            title: "Graphic Designer (Part-Time)",
            company: "Shemfort Futuristic School",
            period: "Nov 2022 – Present",
            location: "Balangir, Odisha",
            tasks: ["Designed promotional banners, posters, and event creatives", "Created visuals for academic competitions, fests, and online campaigns"]
          }, {
            title: "Graphic Designer",
            company: "Mutual Fund India",
            period: "Feb 2023 – Jan 2024",
            location: "Remote",
            tasks: ["Produced marketing materials for investor awareness programs", "Ensured consistent brand presence across social media"]
          }, {
            title: "Freelance Graphic Designer",
            company: "Multiple Clients",
            period: "2020 – Present",
            location: "Remote",
            tasks: ["Completed 50+ graphic design projects: logos, websites, posters, animations", "Specialized in scroll-based text animations and interactive web visuals"]
          }].map((job, index) => <Card key={index} className="bg-portfolio-light border-portfolio-light hover:border-portfolio-orange/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{job.title}</h3>
                      <p className="text-portfolio-orange font-medium">{job.company}</p>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <p className="text-gray-300 font-medium">{job.period}</p>
                      <p className="text-gray-400 text-sm">{job.location}</p>
                    </div>
                  </div>
                  <ul className="text-gray-300 space-y-2">
                    {job.tasks.map((task, taskIndex) => <li key={taskIndex} className="flex items-start gap-2">
                        <span className="text-portfolio-orange mt-1">•</span>
                        <span>{task}</span>
                      </li>)}
                  </ul>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6 bg-portfolio-gray/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">My <span className="text-portfolio-purple">Education</span></h2>
            <p className="text-gray-400 text-lg">Academic background and qualifications</p>
          </div>
          <div className="space-y-6">
            {[{
            degree: "Bachelor of Science (BSc) in Physics",
            institution: "PS Degree College, Ghasin",
            university: "Affiliated to Rajendra University, Balangir",
            year: "2025",
            status: "Current"
          }, {
            degree: "Higher Secondary (+2 Vocational) in Computer Technology",
            institution: "Government College, Balangir",
            year: "2021",
            status: "Completed"
          }, {
            degree: "Matriculation (10th)",
            institution: "P.P. Academy, Balangir",
            year: "2018",
            status: "Completed"
          }].map((edu, index) => <Card key={index} className="bg-portfolio-light border-portfolio-light">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{edu.degree}</h3>
                      <p className="text-portfolio-purple font-medium mb-1">{edu.institution}</p>
                      {edu.university && <p className="text-gray-400 text-sm">{edu.university}</p>}
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                      <Badge className={`${edu.status === 'Current' ? 'bg-portfolio-orange/20 text-portfolio-orange' : 'bg-portfolio-purple/20 text-portfolio-purple'}`}>
                        {edu.year}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Certifications & <span className="text-portfolio-red">Training</span></h2>
            <p className="text-gray-400 text-lg">Professional development and skill certifications</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {["Adobe Photoshop & Illustrator Essentials – Creative Cloud Mastery", "Motion Graphics with After Effects – Udemy / Skillshare", "Canva Pro Design Certification – Social Media Branding", "Certificate in Computer Technology – Vocational Program", "Freelance Design Fundamentals – Online Learning"].map((cert, index) => <Card key={index} className="bg-portfolio-light border-portfolio-light hover:border-portfolio-red/50 transition-colors">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-portfolio-red/20 rounded-full flex items-center justify-center">
                    <span className="text-portfolio-red text-xl">🏆</span>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">{cert}</h3>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-portfolio-gray/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">My Work <span className="text-portfolio-orange">Skills</span></h2>
            <p className="text-gray-400 text-lg">Tools and technologies I master</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Adobe Photoshop", logo: "🔴" },
              { name: "Adobe Illustrator", logo: "🟠" },
              { name: "After Effects", logo: "🟣" },
              { name: "Canva", logo: "🌈" },
              { name: "Figma", logo: "🟡" },
              { name: "Social Media Creatives", logo: "📱" },
              { name: "Motion Graphics", logo: "🎬" },
              { name: "Short Video Editing", logo: "🎞️" }
            ].map((skill, index) => <div key={index} className="bg-portfolio-light rounded-xl p-6 text-center hover:bg-portfolio-orange/10 transition-colors group">
                <div className="text-3xl mb-3 transition-transform group-hover:scale-110">{skill.logo}</div>
                <h3 className="text-white font-medium">{skill.name}</h3>
              </div>)}
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Work <span className="text-portfolio-purple">Process</span></h2>
            <p className="text-gray-400 text-lg">How I bring your ideas to life</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[{
            step: "01",
            title: "Concept",
            desc: "Understand brief & brainstorm",
            icon: "💡"
          }, {
            step: "02",
            title: "Design",
            desc: "Develop drafts & iterate",
            icon: "🎨"
          }, {
            step: "03",
            title: "Delivery",
            desc: "Final files with revisions",
            icon: "🚀"
          }].map((process, index) => <div key={index} className={`text-center space-y-4 animate-fade-in-up [animation-delay:${0.3 + index * 0.2}s]`}>
                <div className="bg-portfolio-light rounded-full w-20 h-20 flex items-center justify-center mx-auto text-2xl hover:scale-110 transition-transform duration-300">
                  {process.icon}
                </div>
                <div className="text-portfolio-orange font-bold text-lg animate-pulse">{process.step}</div>
                <h3 className="text-xl font-semibold text-white">{process.title}</h3>
                <p className="text-gray-400">{process.desc}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 px-6 bg-portfolio-gray/30">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">Look at My <span className="text-portfolio-orange">Portfolio</span></h2>
            <p className="text-gray-400 text-xl">Featured projects that showcase my expertise</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[{
            title: "Mutual Fund Investor Awareness",
            category: "Marketing",
            image: "https://lh3.googleusercontent.com/pw/AP1GczNhIcPCqG4FgCS62_TvDoz3pGQsjZVIiwBpyCXcmbb00wLTHLc8U-TzTay9XYk20uS6Qh9cyUigBbaG1O7zVYb_sgRInn0psnyZ-jbiEelbbkkC3exbe9T9nB5Qk_A06szNG4htGi-d-37XpKoOGOo5=w945-h945-s-no-gm?authuser=0"
          }, {
            title: "Craving for Makeup Social Campaign",
            category: "Social Media",
            image: "https://lh3.googleusercontent.com/pw/AP1GczP7ouqHF3AxkCaJzx-CLXZYI7ORKvi2-tuKTZSnodGWp9vkDp8ZY4s-SP0yEv3GW6lHV58j_rZiFkLEIUVC3v_tyRBHZhTX_cvq0NTCGyJlzCvo3MYe_6ES4TmY7Te5VHIeyZ-1zitf4GeY61ufzZaz=w945-h945-s-no-gm?authuser=0"
          }, {
            title: "Swastik Jewelers Festive Campaign",
            category: "Product Design",
            image: "https://lh3.googleusercontent.com/pw/AP1GczPwdyJOoarCAtyX0njjVYgrWA7fPb6lj3n9QDSxlklVaML6G1UCbAdNm2XGy1ba19Sm5V0SsvLG-61AAD3htZvUUF916zwvuxzYqoNBfrIIChoIwYwf6kJc4kbvGvesZiGA6IKfjLobdRA9BPnZGFL_=w945-h945-s-no-gm?authuser=0"
          }, {
            title: "Shemfort School Event Campaigns",
            category: "Event Design",
            image: "https://lh3.googleusercontent.com/pw/AP1GczOemla1EcRvWWyuhmHjmLw2nJ5OdwLTDf0hDs5XWKxCxFOQKizfj7uU0PD1SteaL6Yxoum3Ez9lz_T3P9B46zC7At13GMHNuCO_cBWw7nZBKIIeGgRClL8eHzrZ-71fbVW8YXFMa_ztqVAsJd2vqo3D=w666-h945-s-no-gm?authuser=0"
          }, {
            title: "Ably Info Solutions Digital Assets",
            category: "Web Design",
            image: "https://lh3.googleusercontent.com/pw/AP1GczPoruP4Ykk7la4UwlvER2I2ZagKtRbFjXeEsmNeLaSj8lI-2nMbwKJwNXoXMkt23NM824IR1Hq1OgBEMaAT0tTXvjubG_zw5woOjK1LDTM4jK2wMrpOoS8BRwtcZTQlS3cuHX68FYdlu1Yc5mJ1Ix6K=w945-h945-s-no-gm?authuser=0"
          }, {
            title: "Food & Restaurant Branding",
            category: "Branding",
            image: "https://lh3.googleusercontent.com/pw/AP1GczN1Aqwn3rLlPVRawWCtsFsj0RxsF-6FSut57cK3ju9jf8McwX9u9LDynTYLulZzjqhcJVkeT10fYqEXkRNcsZhuBVV_W6Pn8kX1upTh6LjvNl5kTLWG8ANAv11ZMYhSKk0ZEoIk7FV-SWF-pZ_ieLsY=w736-h736-s-no-gm?authuser=0"
          }].map((project, index) => <Card key={index} className="group bg-portfolio-light border-none overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="relative">
                  <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
                  <div className="absolute inset-0 bg-portfolio-orange/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button variant="secondary" className="bg-white text-portfolio-orange hover:scale-110 transition-transform">
                      View Project
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <Badge className="bg-portfolio-purple/20 text-portfolio-purple mb-3">{project.category}</Badge>
                  <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                </CardContent>
              </Card>)}
          </div>
          <div className="text-center">
            <Link to="/portfolio">
              <Button className="bg-portfolio-red hover:bg-portfolio-red/80 text-white text-lg px-12 py-4 hover:scale-105 transition-all">
                See All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What My <span className="text-portfolio-purple">Clients Say</span></h2>
            <p className="text-gray-400 text-lg">Testimonials from satisfied clients</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => <Card key={i} className="bg-portfolio-light border-portfolio-light">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img src={`https://images.unsplash.com/photo-${1500000000000 + i}?w=60&h=60&fit=crop&crop=face`} alt="Client" className="w-12 h-12 rounded-full object-cover object-center mr-4" />
                    <div>
                      <h4 className="text-white font-semibold">Client Name {i}</h4>
                      <p className="text-gray-400 text-sm">CEO, Company {i}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">
                    "Sibam delivered exceptional work that exceeded our expectations. Professional, creative, and timely delivery."
                  </p>
                  <div className="flex text-portfolio-orange mt-4">
                    {[...Array(5)].map((_, star) => <span key={star}>⭐</span>)}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">
                Let's Make Your Brand <span className="text-portfolio-orange">Brilliant!</span>
              </h2>
              <p className="text-gray-300 text-lg">
                Ready to bring your vision to life? Let's discuss your project and create something amazing together.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-portfolio-orange" />
                  <span>sibamsahu.design@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-5 h-5 text-portfolio-orange" />
                  <span>+91-9348562817</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-portfolio-orange" />
                  <span>Balangir, Odisha, India</span>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-white mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a href="https://linkedin.com/in/sibamsahu" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 bg-portfolio-orange/20 rounded-full hover:bg-portfolio-orange hover:scale-110 transition-all duration-300">
                    <Linkedin className="w-5 h-5 text-portfolio-orange hover:text-white" />
                  </a>
                  <a href="https://instagram.com/sibamsahu.design" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 bg-portfolio-purple/20 rounded-full hover:bg-portfolio-purple hover:scale-110 transition-all duration-300">
                    <Instagram className="w-5 h-5 text-portfolio-purple hover:text-white" />
                  </a>
                  <a href="https://dribbble.com/sibamsahu" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 bg-portfolio-red/20 rounded-full hover:bg-portfolio-red hover:scale-110 transition-all duration-300">
                    <Dribbble className="w-5 h-5 text-portfolio-red hover:text-white" />
                  </a>
                  <a href="https://twitter.com/sibamsahu" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 bg-blue-500/20 rounded-full hover:bg-blue-500 hover:scale-110 transition-all duration-300">
                    <Twitter className="w-5 h-5 text-blue-500 hover:text-white" />
                  </a>
                </div>
              </div>
            </div>
            <Card className="bg-portfolio-light border-portfolio-light">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                    <Input className="bg-portfolio-gray border-portfolio-gray text-white" placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <Input type="email" className="bg-portfolio-gray border-portfolio-gray text-white" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea className="w-full min-h-[120px] bg-portfolio-gray border border-portfolio-gray rounded-md px-3 py-2 text-white placeholder:text-gray-400" placeholder="Tell me about your project..." />
                  </div>
                  <Button className="w-full bg-portfolio-orange hover:bg-portfolio-orange/80 text-white">
                    Let's Talk
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-portfolio-gray py-16 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-portfolio-orange rounded-sm flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="text-xl font-medium text-white tracking-wide">SIBAM</span>
              </div>
              <p className="text-gray-400">
                Creative Graphic Designer crafting memorable brand experiences.
              </p>
              <div className="flex space-x-4">
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-portfolio-orange cursor-pointer" />
                <Instagram className="w-5 h-5 text-gray-400 hover:text-portfolio-orange cursor-pointer" />
                <Youtube className="w-5 h-5 text-gray-400 hover:text-portfolio-orange cursor-pointer" />
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Navigation</h4>
              <div className="space-y-2">
                <a href="#home" className="block text-gray-400 hover:text-portfolio-orange">Home</a>
                <a href="#services" className="block text-gray-400 hover:text-portfolio-orange">Services</a>
                <a href="#portfolio" className="block text-gray-400 hover:text-portfolio-orange">Portfolio</a>
                <a href="#about" className="block text-gray-400 hover:text-portfolio-orange">About</a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-portfolio-orange" />
                  sibamsahu.design@gmail.com
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-portfolio-orange" />
                  +91-9348562817
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-portfolio-orange" />
                  Balangir, Odisha, India
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe for design tips and updates</p>
              <div className="flex gap-2">
                <Input className="bg-portfolio-light border-portfolio-light text-white" placeholder="Your email" />
                <Button className="bg-portfolio-purple hover:bg-portfolio-purple/80">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="border-t border-portfolio-light pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400">© 2025 Sibam Sahu. All Rights Reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-portfolio-orange">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-portfolio-orange">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;