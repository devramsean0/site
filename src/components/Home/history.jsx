import { createSignal, createResource } from 'solid-js';
import '../../styles/history.css'; // Import the CSS file for styling

const fetchHistoryData = async () => {
  return {
    experience: [
      { role: "OPS contributor @ HCB", company: "HCB", startDate: "2023-02-01", endDate: "2024-01-01", description: "I managed most of the perks that HCB offers. I also successfully relaunched the domain's perk after Google Domains shutdown and navigated the transition.", location: "Chesterfield, England, United Kingdom" },
      { role: "Volunteer Engineer for HCB", company: "HCB", startDate: "2024-01-01", endDate: "2024-03-01", description: "Participated in the HCB Mentorship program", location: "Chesterfield, England, United Kingdom" },
    ],
    education: [
      { degree: "GCSE's", institution: "UTC Sheffield Olympic Legacy Park", startDate: "2021-07-01", endDate: "2024-06-14", description: "Completed several GCSE's and a Cambridge National in IT" },
    ],
  };
};

const History = () => {
  const [data] = createResource(fetchHistoryData);

  const sortedExperience = () => {
    if (!data()) return [];
    return data().experience.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
  };

  const sortedEducation = () => {
    if (!data()) return [];
    return data().education.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
  };

  return (
    <div class="history-container">
      <div class="history-pane">
        <h2>Experience</h2>
        {sortedExperience().map(item => (
          <div class="history-entry">
            <div class="history-entry-marker"></div>
            <div class="history-entry-content">
              <div class="history-entry-header">
                <div class="history-entry-role">{item.role}</div>
                <div class="history-entry-company">{item.company}</div>
                <div class="history-entry-dates">
                  {new Date(item.startDate).toLocaleString('default', { month: 'short', year: 'numeric' })} - {item.endDate === "Present" ? "Present" : new Date(item.endDate).toLocaleString('default', { month: 'short', year: 'numeric' })}
                </div>
                {item.location && <div class="history-entry-location">{item.location}</div>}
              </div>
              <div class="history-entry-description">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
      <div class="history-pane">
        <h2>Education</h2>
        {sortedEducation().map(item => (
          <div class="history-entry">
            <div class="history-entry-marker"></div>
            <div class="history-entry-content">
              <div class="history-entry-header">
                <div class="history-entry-role">{item.degree}</div>
                <div class="history-entry-company">{item.institution}</div>
                <div class="history-entry-dates">
                  {new Date(item.startDate).toLocaleString('default', { month: 'short', year: 'numeric' })} - {item.endDate === "Present" ? "Present" : new Date(item.endDate).toLocaleString('default', { month: 'short', year: 'numeric' })}
                </div>
              </div>
              <div class="history-entry-description">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
