import { motion } from "framer-motion";
import React from "react";

import { resumeDetails } from "../data";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const SkillItem = ({ name, logo }) => {
  return (
    <div className="bg-tertiary bg-opacity-10 rounded-xl p-4 flex items-center space-x-3 transition-all hover:bg-opacity-20">
      <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
        {logo ? (
          <img src={logo} alt={name} className="w-8 h-8 object-contain" />
        ) : (
          <div className="w-8 h-8 bg-quaternary rounded-full"></div>
        )}
      </div>
      <span className="text-white text-md md:text-lg">{name}</span>
    </div>
  );
};

const AcademicItem = ({ name, description, subDescription }) => {
  return (
    <div className="bg-tertiary bg-opacity-10 rounded-xl p-6">
      <h4 className="text-white text-lg md:text-xl font-medium">{name}</h4>
      <p className="text-secondary text-md md:text-lg mt-2">{description}</p>
      {subDescription && (
        <p className="text-quaternary text-md md:text-lg mt-1">{subDescription}</p>
      )}
    </div>
  );
};

const Resume = () => {
  return (
    <div className="sm:my-20">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText} text-center`}>
          {resumeDetails.title}
        </h2>
      </motion.div>

      <div className="mt-10 md:mt-20">
        {resumeDetails.sections.map((section, sectionIndex) => (
          <div key={`section-${sectionIndex}`} className="mb-16">
            <h3 className="text-white text-2xl md:text-3xl font-semibold mb-6">{section.title}</h3>
            
            {section.title !== "Academic Credentials" ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {section.items.map((item, itemIndex) => (
                  <SkillItem 
                    key={`skill-${sectionIndex}-${itemIndex}`} 
                    name={item.name} 
                    logo={item.logo} 
                  />
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {section.items.map((item, itemIndex) => (
                  <AcademicItem 
                    key={`academic-${itemIndex}`} 
                    name={item.name} 
                    description={item.description}
                    subDescription={item.subDescription}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Resume, "experience"); 