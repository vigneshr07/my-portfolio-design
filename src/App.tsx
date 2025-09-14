import { useState } from 'react';
import { Navigation } from "./components/Navigation";
import { HomePage } from "./components/HomePage";
import { SkillsPage } from "./components/sections/SkillsPage";
import { ExperiencePage } from "./components/sections/ExperiencePage";
import { ProjectsPage } from "./components/sections/ProjectsPage";
import { HobbiesPage } from "./components/sections/HobbiesPage";
import { PhotosPage } from "./components/sections/PhotosPage";
import { ThoughtsPage } from "./components/sections/ThoughtsPage";
import { ContactPage } from "./components/sections/ContactPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'skills':
        return <SkillsPage />;
      case 'experience':
        return <ExperiencePage />;
      case 'projects':
        return <ProjectsPage />;
      case 'hobbies':
        return <HobbiesPage />;
      case 'photos':
        return <PhotosPage />;
      case 'thoughts':
        return <ThoughtsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
    </div>
  );
}