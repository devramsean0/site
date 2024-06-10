import { createSignal, createResource } from 'solid-js';
import './../../styles/experience.css'; // Import the CSS file for styling

const fetchLinkedInData = async () => {
  return {
    experience: [
      { role: "OPS contributor @ HCB", company: "HCB", startDate: "2023-02-01", endDate: "2024-01-01", description: "I managed most of the perks that HCB offers. I also successfully relaunched the domain's perk after Google Domains shutdown and navigated the transition." },
      { role: "Volunteer Engineer for HCB", company: "HCB", startDate: "2024-01-01", endDate: "2024-03-01", description: "Participated in the HCB Mentorship program", location: "Chesterfield, England, United Kingdom" },
    ],
    education: [],
  };
};

const LinkedInExperience = () => {
  const [data] = createResource(fetchLinkedInData);

  const sortedData = () => {
    if (!data()) return [];

    const combined = [
      ...data().experience.map(exp => ({ ...exp, type: 'experience' })),
      ...data().education.map(edu => ({ ...edu, type: 'education' })),
    ];

    return combined.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
  };

  return (
    <div class="linkedIn-container">
      {sortedData().map(item => (
        <div class="linkedIn-entry">
          <div class="linkedIn-entry-marker"></div>
          <div class="linkedIn-entry-content">
            <div class="linkedIn-entry-header">
              <div class="linkedIn-entry-role">{item.role}</div>
              <div class="linkedIn-entry-company">{item.company}</div>
              <div class="linkedIn-entry-dates">
                {new Date(item.startDate).toLocaleString('default', { month: 'short', year: 'numeric' })} - {item.endDate === "Present" ? "Present" : new Date(item.endDate).toLocaleString('default', { month: 'short', year: 'numeric' })}
              </div>
              {item.location && <div class="linkedIn-entry-location">{item.location}</div>}
            </div>
            <div class="linkedIn-entry-description">{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LinkedInExperience;
