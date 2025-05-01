import React from 'react';
import MatrixLinesBackground from '../styles/mat';
import '../index.css';
import ProblematicPage from './sectionettes/prob';
import TopicsPage from './sectionettes/topic';
import ObjectivesPage from './sectionettes/obj';
import RegistrationFeesPage from './sectionettes/reg';
import CommitteeScientificPage from './sectionettes/committee';
import OrganizationCommitteePage from './sectionettes/com';
import SponsorsPage from './sectionettes/sponsors';

const Mainn: React.FC = () => {
  return (
    <div className="relative bg-black min-h-screen overflow-hidden">
      {/* Background component */}
      <MatrixLinesBackground />
      
      {/* Note: Navbar is now handled in App.tsx */}
      <main className="relative z-10 w-full">
        <section id="problematic" className="w-full">
          <ProblematicPage />
        </section>
        <section id="topic" className="min-h-screen w-full">
          <TopicsPage />
        </section>
        <section id="objectives" className="min-h-screen w-full">
          <ObjectivesPage />
        </section>
        <section id="registration-fees" className="min-h-screen py-20 w-full">
          <RegistrationFeesPage />
        </section>
        <section id="scientific-committee" className="min-h-screen py-20 w-full">
          <CommitteeScientificPage />
        </section>
        <section id="organization-committee" className="min-h-screen py-20 w-full">
          <OrganizationCommitteePage />
        </section>
        <section id="sponsors" className="min-h-screen py-20 w-full">
          <SponsorsPage />
        </section>
      </main>
    </div>
  );
};

export default Mainn;