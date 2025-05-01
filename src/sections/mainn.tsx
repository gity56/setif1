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
      {/* Background animation */}
      <MatrixLinesBackground />

      <main className="relative z-10 w-full flex justify-center">
        <div className="w-full max-w-7xl px-4 md:px-8">
          <section id="problematic" className="w-full py-16">
            <ProblematicPage />
          </section>
          <section id="topic" className="min-h-screen w-full py-16">
            <TopicsPage />
          </section>
          <section id="objectives" className="min-h-screen w-full py-16">
            <ObjectivesPage />
          </section>
          <section id="registration-fees" className="min-h-screen w-full py-20">
            <RegistrationFeesPage />
          </section>
          <section id="scientific-committee" className="min-h-screen w-full py-20">
            <CommitteeScientificPage />
          </section>
          <section id="organization-committee" className="min-h-screen w-full py-20">
            <OrganizationCommitteePage />
          </section>
          <section id="sponsors" className="min-h-screen w-full py-20">
            <SponsorsPage />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Mainn;