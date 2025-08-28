<<<<<<< HEAD
function nextPage(pageNumber) {
  document.querySelectorAll('.form-page').forEach(page => page.classList.remove('active'));
  document.getElementById('page' + pageNumber).classList.add('active');
}

function prevPage(pageNumber) {
  document.querySelectorAll('.form-page').forEach(page => page.classList.remove('active'));
  document.getElementById('page' + pageNumber).classList.add('active');
}

document.getElementById('resumeForm').addEventListener('submit', function (e) {
    e.preventDefault();

  
    // Collect form data
    const formData = {
      // Personal Details
      name: document.getElementById('name').value,
      address: document.getElementById('address').value,
      phone: document.getElementById('phone').value,
      email: document.getElementById('email').value,
      linkedin: document.getElementById('linkedin').value,
      github: document.getElementById('github').value,

      // Education
      clg: document.getElementById('clg').value,
      clgeducationDates: document.getElementById('clg-educationDates').value,
      clgdegree: document.getElementById('clg-degree').value,
      clgbranch: document.getElementById('clg-Stream').value,
      clglocation: document.getElementById('clg-location').value,

      school: document.getElementById('school').value,
      educationDates: document.getElementById('educationDates').value,
      degree: document.getElementById('degree').value,
      stream: document.getElementById('Stream').value,
      location: document.getElementById('location').value,

      //courses
      course1: document.getElementById('course1').value,
      course2: document.getElementById('course2').value,
      course3: document.getElementById('course3').value,
      course4: document.getElementById('course4').value,
      course5: document.getElementById('course5').value,
      course6: document.getElementById('course6').value,

      // Experience
      company1: document.getElementById('company1').value,
      jobDates1: document.getElementById('jobDates1').value,
      jobTitle1: document.getElementById('jobTitle1').value,
      companyLocation1: document.getElementById('companyLocation1').value,
      company1des1: document.getElementById('company1des1').value,
      company1des2: document.getElementById('company1des2').value,
      
      company2: document.getElementById('company2').value,
      jobDates2: document.getElementById('jobDates2').value,
      jobTitle2: document.getElementById('jobTitle2').value,
      companyLocation2: document.getElementById('companyLocation2').value,
      company2des1: document.getElementById('company2des1').value,
      company2des2: document.getElementById('company2des2').value,
      
      // Projects
      project1: document.getElementById('project1').value,
      project1Tech: document.getElementById('project1Tech').value,
      project1link: document.getElementById('project1link').value ,
      project1Date: document.getElementById('project1Date').value,
      project1des1: document.getElementById('project1Des1').value,
      project1des2: document.getElementById('project1Des2').value,
      project1des3: document.getElementById('project1Des3').value,
      
      project2: document.getElementById('project2').value ,
      project2Tech: document.getElementById('project2Tech').value,
      project2link: document.getElementById('project2link').value,
      project2Date: document.getElementById('project2Date').value,
      project2des1: document.getElementById('project2Des1').value,
      project2des2: document.getElementById('project2Des2').value,
      project2des3: document.getElementById('project2Des3').value,

      project3: document.getElementById('project3').value ,
      project3Tech: document.getElementById('project3Tech').value,
      project3link: document.getElementById('project3link').value,
      project3Date: document.getElementById('project3Date').value,
      project3des1: document.getElementById('project3Des1').value,
      project3des2: document.getElementById('project3Des2').value,
      project3des3: document.getElementById('project3Des3').value,

      //technical skills
      languages: document.getElementById('languages').value,
      tools: document.getElementById('tools').value,
      technologies: document.getElementById('technologies').value,

      //certifications
      certification1: document.getElementById('certification1').value,
      certificationLink1: document.getElementById('certificationLink1').value,
      certification2: document.getElementById('certification2').value,
      certificationLink2: document.getElementById('certificationLink2').value,
      certification3: document.getElementById('certification3').value,
      certificationLink3: document.getElementById('certificationLink3').value,
    };
  
    console.log('Form data:', formData);
  
    // Convert data to LaTeX format
    const latexContent = generateLaTeX(formData);
    console.log('Generated LaTeX content:', latexContent);
  
    // Send LaTeX content to the backend
    fetch('http://localhost:3001/generate-pdf', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ latexContent }),
    })
      .then((response) => {
        if (response.ok) {
          return response.blob();
        } else {
          throw new Error('Error generating PDF');
        }
      })
      .then((blob) => {
=======
let currentPage = 1;
const totalPages = 7;

// Counters for dynamic content
let experienceCounter = 1;
let projectCounter = 1;
let certificationCounter = 1;
let educationCounter = 1;

document.addEventListener('DOMContentLoaded', function() {
    updateProgress();
    setupFormValidation();
    updateNavigation();
    initializeDynamicContent();
});

// Dynamic Content Management
function initializeDynamicContent() {
    if (document.querySelectorAll('.experience-item').length === 0) {
        addExperience();
    }
    if (document.querySelectorAll('.project-item').length === 0) {
        addProject();
    }
    if (document.querySelectorAll('.certification-item').length === 0) {
        addCertification();
    }
    if (document.querySelectorAll('.education-item').length === 0) {
        addEducation();
    }
}

// ================= Experience =================
function addExperience() {
    experienceCounter++;
    const container = document.getElementById('experienceContainer');
    container.insertAdjacentHTML('beforeend', createExperienceHTML(experienceCounter));
    setupFormValidation();
}

function createExperienceHTML(counter) {
    return `
        <div class="experience-item" data-experience="${counter}">
            <h4>Experience ${counter}</h4>
            <div class="form-grid">
                <div class="form-group">
                    <input type="text" id="company${counter}" name="company${counter}" placeholder=" ">
                    <label>Company Name</label>
                </div>
                <div class="form-group">
                    <input type="text" id="jobTitle${counter}" name="jobTitle${counter}" placeholder=" ">
                    <label>Job Title</label>
                </div>
                <div class="form-group">
                    <input type="text" id="jobDates${counter}" name="jobDates${counter}" placeholder=" ">
                    <label>Duration</label>
                </div>
            </div>
            <div class="points-container" id="experiencePoints${counter}">
                <div class="point-item">
                    <input type="text" name="expPoint${counter}_1" placeholder="Key responsibility or achievement...">
                    <button type="button" class="btn-point-remove" onclick="removePoint(this)">&times;</button>
                </div>
            </div>
            <div class="point-actions">
                <button type="button" class="btn-point-add" onclick="addExperiencePoint(${counter})">
                    <i class="fas fa-plus"></i> Add Point
                </button>
            </div>
            <button type="button" class="btn-remove" onclick="removeExperience(${counter})">
                <i class="fas fa-trash"></i> Remove
            </button>
        </div>
    `;
}

function removeExperience(counter) {
    document.querySelector(`[data-experience="${counter}"]`)?.remove();
}

function addExperiencePoint(counter) {
    const container = document.getElementById(`experiencePoints${counter}`);
    const pointCount = container.querySelectorAll('.point-item').length + 1;
    const newPoint = `
        <div class="point-item">
            <input type="text" name="expPoint${counter}_${pointCount}" placeholder="Key responsibility or achievement...">
            <button type="button" class="btn-point-remove" onclick="removePoint(this)">&times;</button>
        </div>
    `;
    container.insertAdjacentHTML('beforeend', newPoint);
}

// ================= Project =================
function addProject() {
    projectCounter++;
    const container = document.getElementById('projectsContainer');
    container.insertAdjacentHTML('beforeend', createProjectHTML(projectCounter));
    setupFormValidation();
}

function createProjectHTML(counter) {
    return `
        <div class="project-item" data-project="${counter}">
            <h4>Project ${counter}</h4>
            <div class="form-grid">
                <div class="form-group">
                    <input type="text" id="project${counter}" name="project${counter}" placeholder=" ">
                    <label>Project Name</label>
                </div>
                <div class="form-group">
                    <input type="text" id="project${counter}Tech" name="project${counter}Tech" placeholder=" ">
                    <label>Technologies Used</label>
                </div>
                <div class="form-group">
                    <input type="url" id="project${counter}link" name="project${counter}link" placeholder=" ">
                    <label>Project Link</label>
                </div>
                <div class="form-group">
                    <input type="text" id="project${counter}Date" name="project${counter}Date" placeholder=" ">
                    <label>Project Date (e.g., March 2025)</label>
                </div>
            </div>
            <div class="points-container" id="projectPoints${counter}">
                <div class="point-item">
                    <input type="text" name="projPoint${counter}_1" placeholder="Project feature or accomplishment...">
                    <button type="button" class="btn-point-remove" onclick="removePoint(this)">&times;</button>
                </div>
            </div>
            <div class="point-actions">
                <button type="button" class="btn-point-add" onclick="addProjectPoint(${counter})">
                    <i class="fas fa-plus"></i> Add Point
                </button>
            </div>
            <button type="button" class="btn-remove" onclick="removeProject(${counter})">
                <i class="fas fa-trash"></i> Remove
            </button>
        </div>
    `;
}

function addProjectPoint(counter) {
    const container = document.getElementById(`projectPoints${counter}`);
    const pointCount = container.querySelectorAll('.point-item').length + 1;
    const newPoint = `
        <div class="point-item">
            <input type="text" name="projPoint${counter}_${pointCount}" placeholder="Project feature or accomplishment...">
            <button type="button" class="btn-point-remove" onclick="removePoint(this)">&times;</button>
        </div>
    `;
    container.insertAdjacentHTML('beforeend', newPoint);
}

function removeProject(counter) {
    document.querySelector(`[data-project="${counter}"]`)?.remove();
}

// ================= Certification =================
function addCertification() {
    certificationCounter++;
    const container = document.getElementById('certificationsContainer');
    container.insertAdjacentHTML('beforeend', createCertificationHTML(certificationCounter));
    setupFormValidation();
}

function createCertificationHTML(counter) {
    return `
        <div class="certification-item" data-certification="${counter}">
            <h4>Certification ${counter}</h4>
            <div class="form-grid">
                <div class="form-group">
                    <input type="text" id="certification${counter}" name="certification${counter}" placeholder=" ">
                    <label>Certification Name</label>
                </div>
                <div class="form-group">
                    <input type="url" id="certificationLink${counter}" name="certificationLink${counter}" placeholder=" ">
                    <label>Certification Link</label>
                </div>
            </div>
            <button type="button" class="btn-remove" onclick="removeCertification(${counter})">
                <i class="fas fa-trash"></i> Remove
            </button>
        </div>
    `;
}

function removeCertification(counter) {
    document.querySelector(`[data-certification="${counter}"]`)?.remove();
}

// ================= Education =================
function addEducation() {
    educationCounter++;
    const container = document.getElementById('educationContainer');
    container.insertAdjacentHTML('beforeend', createEducationHTML(educationCounter));
    setupFormValidation();
}

function createEducationHTML(counter) {
    return `
        <div class="education-item" data-education="${counter}">
            <h4>Education ${counter}</h4>
            <div class="form-grid">
                <div class="form-group">
                    <input type="text" id="clg${counter}" name="clg${counter}" placeholder=" ">
                    <label>College Name</label>
                </div>
                <div class="form-group">
                    <input type="text" id="clg-educationDates${counter}" name="clg-educationDates${counter}" placeholder=" ">
                    <label>Duration</label>
                </div>
                <div class="form-group">
                    <input type="text" id="clg-degree${counter}" name="clg-degree${counter}" placeholder=" ">
                    <label>Degree</label>
                </div>
                <div class="form-group">
                    <input type="text" id="clg-Stream${counter}" name="clg-Stream${counter}" placeholder=" ">
                    <label>Stream</label>
                </div>
            </div>
            <button type="button" class="btn-remove" onclick="removeEducation(${counter})">
                <i class="fas fa-trash"></i> Remove
            </button>
        </div>
    `;
}

function removeEducation(counter) {
    document.querySelector(`[data-education="${counter}"]`)?.remove();
}

// ================= Points =================
function removePoint(button) {
    button.parentElement.remove();
}

// ================== Form Data Collection ==================
function collectFormData() {
    const formData = {};
    const inputs = document.querySelectorAll('input, textarea');

    inputs.forEach(input => {
        if (input.name && input.value.trim()) {
            formData[input.name] = escapeLatex(input.value);
        }
    });

    formData.experiences = collectExperiences();
    formData.projects = collectProjects();
    formData.certifications = collectCertifications();
    formData.educations = collectEducations();
    return formData;
}

function collectExperiences() {
    const experiences = [];
    const experienceItems = document.querySelectorAll('.experience-item');
    
    experienceItems.forEach(item => {
        const counter = item.dataset.experience;
        const experience = {
            company: document.getElementById(`company${counter}`)?.value || '',
            jobTitle: document.getElementById(`jobTitle${counter}`)?.value || '',
            duration: document.getElementById(`jobDates${counter}`)?.value || '',
            description: collectExperiencePoints(counter)
        };
        
        if (experience.company || experience.jobTitle) {
            experiences.push(experience);
        }
    });
    
    return experiences;
}

function collectExperiencePoints(counter) {
    const points = [];
    const pointInputs = document.querySelectorAll(`input[name^="expPoint${counter}_"]`);
    
    pointInputs.forEach(input => {
        if (input.value.trim()) {
            points.push(input.value.trim());
        }
    });
    
    return points.join('\n');
}

function collectProjects() {
    const projects = [];
    const projectItems = document.querySelectorAll('.project-item');
    
    projectItems.forEach(item => {
        const counter = item.dataset.project;
        const project = {
            name: document.getElementById(`project${counter}`)?.value || '',
            technologies: document.getElementById(`project${counter}Tech`)?.value || '',
            link: document.getElementById(`project${counter}link`)?.value || '',
            date: document.getElementById(`project${counter}Date`)?.value || '',
            description: collectProjectPoints(counter)
        };
        
        if (project.name) {
            projects.push(project);
        }
    });
    
    return projects;
}

function collectProjectPoints(counter) {
    const points = [];
    const pointInputs = document.querySelectorAll(`input[name^="projPoint${counter}_"]`);
    
    pointInputs.forEach(input => {
        if (input.value.trim()) {
            points.push(input.value.trim());
        }
    });
    
    return points.join('\n');
}

function collectCertifications() {
    const certifications = [];
    const certificationItems = document.querySelectorAll('.certification-item');
    
    certificationItems.forEach(item => {
        const counter = item.dataset.certification;
        const certification = {
            name: document.getElementById(`certification${counter}`)?.value || '',
            link: document.getElementById(`certificationLink${counter}`)?.value || ''
        };
        
        if (certification.name) {
            certifications.push(certification);
        }
    });
    
    return certifications;
}

function collectEducations() {
    const educations = [];
    const educationItems = document.querySelectorAll('.education-item');
    
    educationItems.forEach(item => {
        const counter = item.dataset.education;
        const education = {
            college: document.getElementById(`clg${counter}`)?.value || '',
            duration: document.getElementById(`clg-educationDates${counter}`)?.value || '',
            degree: document.getElementById(`clg-degree${counter}`)?.value || '',
            stream: document.getElementById(`clg-Stream${counter}`)?.value || ''
        };
        
        if (education.college || education.degree) {
            educations.push(education);
        }
    });
    
    return educations;
}

// URL formatting function
function formatURL(url, defaultText, platform) {
    if (!url) return defaultText;
    
    if (platform === 'linkedin') {
        return url.replace(/^https?:\/\/www\.linkedin\.com\/in\//, '');
    } else if (platform === 'github') {
        return url.replace(/^https?:\/\/github\.com\//, '');
    } else {
        return url.replace(/^https?:\/\//, '');
    }
}

// Enhanced LaTeX Generation with improved formatting
function generateLaTeX(data) {
    let latex = `
\\documentclass[10pt,letterpaper]{article}

% Layout & basics
\\usepackage[
  ignoreheadfoot,
  top=1cm,bottom=1cm,left=1.5cm,right=1.5cm,footskip=1cm
]{geometry}
\\usepackage{titlesec,tabularx,array,xcolor,enumitem}
\\usepackage[colorlinks=true,urlcolor=black]{hyperref}
\\usepackage[T1]{fontenc}
\\usepackage[utf8]{inputenc}
\\usepackage{lmodern}
\\usepackage{needspace}

% FontAwesome setup - use simpler approach without graphicx
\\usepackage{fontawesome5}

% Page style
\\pagestyle{empty}
\\setcounter{secnumdepth}{0}
\\setlength{\\parindent}{0pt}
\\setlength{\\columnsep}{0cm}
\\setlength{\\tabcolsep}{0in}

% Simple icon command without scaling
\\newcommand{\\smallfaicon}[1]{\\faIcon{#1}}

% Section format with larger font size and normal weight (non-bold)
% Single line space after title + horizontal rule (one line)
\\titleformat{\\section}
  {\\needspace{4\\baselineskip}\\normalfont\\large} % bigger font, normal weight
  {}
  {0pt}
  {}
  [\\vspace{4pt}\\titlerule]

\\titlespacing{\\section}{-1pt}{0.3cm}{0.2cm}

% Bullet style
\\renewcommand\\labelitemi{$\\circ$}

% Resume macros
\\newcommand{\\resumeItem}[1]{\\item\\small{#1}}
\\newcommand{\\resumeItemListStart}{\\begin{itemize}[leftmargin=*]}
\\newcommand{\\resumeItemListEnd}{\\end{itemize}}

\\newcommand{\\resumeSubHeadingListStart}{\\begin{itemize}[leftmargin=0in]}
\\newcommand{\\resumeSubHeadingListEnd}{\\end{itemize}}

\\newcommand{\\resumeSubheading}[4]{%
  \\item
  \\begin{tabular*}{\\textwidth}{l@{\\extracolsep{\\fill}}r}
    \\textbf{#1} & \\textbf{#2} \\\\
    \\textit{#3} & \\textit{#4}
  \\end{tabular*}\\vspace{-5pt}
}

% Reduce spacing in bullets globally
\\setlist[itemize]{noitemsep, topsep=2pt}

\\begin{document}

%----------HEADING-----------------
\\begin{center}
{\\Huge \\scshape ${data.name || ''}}\\\\[6pt]
\\smallfaicon{map-marker-alt} ${data.address || ''} \\quad | \\quad
\\smallfaicon{phone} \\href{tel:${data.phone || ''}}{${data.phone || ''}} \\quad | \\quad
\\smallfaicon{envelope} \\href{mailto:${data.email || ''}}{${data.email || ''}} \\\\[4pt]
${data.portfolio ? `\\smallfaicon{link} \\href{${data.portfolio}}{${formatURL(data.portfolio, 'Portfolio')}} \\quad | \\quad` : ''}
${data.linkedin ? `\\smallfaicon{linkedin} \\href{${data.linkedin}}{${formatURL(data.linkedin, 'LinkedIn', 'linkedin')}} \\quad | \\quad` : ''}
${data.github ? `\\smallfaicon{github} \\href{${data.github}}{${formatURL(data.github, 'GitHub', 'github')}}` : ''}
\\end{center}
`;

    // Only add Professional Summary if provided
    if (data.professionalSummary && data.professionalSummary.trim()) {
        latex += `
% Professional Summary (no icon in title)
\\section*{Professional Summary}
\\begin{itemize}[leftmargin=*]
  \\item ${data.professionalSummary}
\\end{itemize}
`;
    }

    // Only add Projects if there are valid projects
    const validProjects = data.projects.filter(proj => 
        proj.name && proj.name.trim()
    );
    
    if (validProjects.length > 0) {
        latex += `
% Projects (no icon in title)
\\section*{Projects}
\\begin{itemize}[leftmargin=*]`;
        
        validProjects.forEach(proj => {
            const projectDate = proj.date || '';
            latex += `
  \\item \\textbf{\\href{${proj.link || ''}}{${proj.name || ''}}} 
  | \\emph{${proj.technologies || ''}} \\hfill \\textbf{${projectDate}}`;
            
            if (proj.description && proj.description.trim()) {
                const points = proj.description.split('\n').filter(point => point.trim());
                if (points.length > 0) {
                    latex += `
  \\resumeItemListStart`;
                    
                    points.forEach(point => {
                        latex += `
    \\resumeItem{${point.trim()}}`;
                    });
                    
                    latex += `
  \\resumeItemListEnd`;
                }
            }
        });
        
        latex += `
\\end{itemize}`;
    }

    // Only add Experience if there are valid experiences
    const validExperiences = data.experiences.filter(exp => 
        exp.company && exp.company.trim() || 
        exp.jobTitle && exp.jobTitle.trim()
    );
    
    if (validExperiences.length > 0) {
        latex += `
% Experience (no icon in title)
\\section*{Experience}
\\resumeSubHeadingListStart`;
        
        validExperiences.forEach(exp => {
            latex += `
  \\resumeSubheading
    {${exp.company || ''}}{${exp.duration || ''}}
    {${exp.jobTitle || ''}}{}`;
            
            if (exp.description && exp.description.trim()) {
                const points = exp.description.split('\n').filter(point => point.trim());
                if (points.length > 0) {
                    latex += `
  \\resumeItemListStart`;
                    
                    points.forEach(point => {
                        latex += `
    \\resumeItem{${point.trim()}}`;
                    });
                    
                    latex += `
  \\resumeItemListEnd`;
                }
            }
        });
        
        latex += `
\\resumeSubHeadingListEnd`;
    }

    // Only add Education if provided
    const validEducations = data.educations.filter(edu => 
        edu.college && edu.college.trim() || 
        edu.degree && edu.degree.trim()
    );
    
    if (validEducations.length > 0) {
        latex += `
% Education (no icon in title)
\\section*{Education}
\\begin{itemize}[leftmargin=*]`;
        
        validEducations.forEach(edu => {
            latex += `
    \\item \\textbf{${edu.college || ''}} \\hfill \\textbf{${edu.duration || ''}} \\\\
        ${edu.degree || ''} \\hfill\\textit{${edu.stream || ''}}`;
        });
        
        latex += `
\\end{itemize}`;
    }

    // Only add Skills if provided
    if (data.languages || data.tools || data.technologies) {
        latex += `
% Technical Skills (no icon in title)
\\section*{Technical Skills}
\\begin{itemize}[leftmargin=*]`;
        if (data.languages && data.languages.trim()) {
            latex += `
  \\item \\textbf{Languages:} ${data.languages}`;
        }
        if (data.tools && data.tools.trim()) {
            latex += `
  \\item \\textbf{Tools:} ${data.tools}`;
        }
        if (data.technologies && data.technologies.trim()) {
            latex += `
  \\item \\textbf{Frameworks/Libraries:} ${data.technologies}`;
        }
        latex += `
\\end{itemize}`;
    }

    // Only add Certifications if there are valid certifications
    const validCertifications = data.certifications.filter(cert => 
        cert.name && cert.name.trim()
    );
    
    if (validCertifications.length > 0) {
        latex += `
% Certifications (no icon in title)
\\section*{Certifications \\& Achievements}
\\begin{itemize}[leftmargin=*]`;
        
        validCertifications.forEach(cert => {
            if (cert.link && cert.link.trim()) {
                latex += `
  \\item \\href{${cert.link}}{\\textbf{${cert.name}}}`;
            } else {
                latex += `
  \\item ${cert.name}`;
            }
        });
        
        latex += `
\\end{itemize}`;
    }

    latex += `
\\end{document}`;
    return latex;
}

// ================= Navigation & Validation =================
function nextPage() {
    if (currentPage < totalPages && validatePage(currentPage)) {
        document.querySelector(`[data-page="${currentPage}"]`).classList.remove('active');
        currentPage++;
        document.querySelector(`[data-page="${currentPage}"]`).classList.add('active');
        updateProgress();
        updateNavigation();
    }
}

function prevPage() {
    if (currentPage > 1) {
        document.querySelector(`[data-page="${currentPage}"]`).classList.remove('active');
        currentPage--;
        document.querySelector(`[data-page="${currentPage}"]`).classList.add('active');
        updateProgress();
        updateNavigation();
    }
}

function updateProgress() {
    document.getElementById('progressFill').style.width = (currentPage / totalPages) * 100 + '%';
}

function updateNavigation() {
    const prevBtn = document.querySelector('.btn-secondary');
    const nextBtn = document.querySelector('.btn-primary');
    const submitBtn = document.querySelector('.btn-success');

    prevBtn.style.display = currentPage === 1 ? 'none' : 'inline-block';
    nextBtn.style.display = currentPage === totalPages ? 'none' : 'inline-block';
    submitBtn.style.display = currentPage === totalPages ? 'inline-block' : 'none';
}

function validatePage(page) {
    const currentPageElement = document.querySelector(`[data-page="${page}"]`);
    const inputs = currentPageElement.querySelectorAll('input[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#ef4444';
            isValid = false;
        } else {
            input.style.borderColor = '#e2e8f0';
        }
    });

    return isValid;
}

function setupFormValidation() {
    document.querySelectorAll('input, textarea').forEach(input => {
        input.addEventListener('blur', function() {
            if (this.hasAttribute('required') && !this.value.trim()) {
                this.style.borderColor = '#ef4444';
            } else {
                this.style.borderColor = '#e2e8f0';
            }
        });
    });
}

function escapeLatex(str) {
    if (!str) return '';
    
    // First escape backslashes to avoid double escaping
    let escaped = str.replace(/\\/g, '\\textbackslash ');
    
    // Escape other special characters
    escaped = escaped.replace(/([&%$#_{}])/g, '\\$1');
    
    // Handle special characters that need different escaping
    escaped = escaped.replace(/~/g, '\\textasciitilde ');
    escaped = escaped.replace(/\^/g, '\\textasciicircum ');
    
    // Escape < and > for LaTeX safety
    escaped = escaped.replace(/</g, '\\textless ');
    escaped = escaped.replace(/>/g, '\\textgreater ');
    
    return escaped;
}

// ================= Submit =================
document.getElementById('resumeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    if (!validatePage(currentPage)) {
        alert('Please fill in all required fields');
        return;
    }

    const formData = collectFormData();
    const latexContent = generateLaTeX(formData);

    fetch('http://localhost:3001/generate-pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ latexContent }),
    })
    .then(response => response.blob())
    .then(blob => {
>>>>>>> ea60ef9 (ui update)
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'resume.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
<<<<<<< HEAD
        alert('PDF downloaded successfully!');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Error generating or downloading PDF');
      });
  });
  
  function generateLaTeX(data) {
    return `

\\documentclass[letterpaper,11pt]{article}

\\usepackage{latexsym}
\\usepackage[empty]{fullpage}
\\usepackage{titlesec}
\\usepackage{marvosym}
\\usepackage[usenames,dvipsnames]{color}
\\usepackage{verbatim}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{fancyhdr}
\\usepackage[english]{babel}
\\usepackage{tabularx}
\\usepackage{fontawesome5}
\\usepackage{multicol}
\\setlength{\\multicolsep}{-3.0pt}
\\setlength{\\columnsep}{-1pt}
\\input{glyphtounicode}


%----------FONT OPTIONS----------
% sans-serif
% \\usepackage[sfdefault]{FiraSans}
% \\usepackage[sfdefault]{roboto}
% \\usepackage[sfdefault]{noto-sans}
% \\usepackage[default]{sourcesanspro}

% serif
% \\usepackage{CormorantGaramond}
% \\usepackage{charter}


\\pagestyle{fancy}
\\fancyhf{} % clear all header and footer fields
\\fancyfoot{}
\\renewcommand{\\headrulewidth}{0pt}
\\renewcommand{\\footrulewidth}{0pt}

% Adjust margins
\\addtolength{\\oddsidemargin}{-0.6in}
\\addtolength{\\evensidemargin}{-0.5in}
\\addtolength{\\textwidth}{1.19in}
\\addtolength{\\topmargin}{-.7in}
\\addtolength{\\textheight}{1.4in}

\\urlstyle{same}

\\raggedbottom
\\raggedright
\\setlength{\\tabcolsep}{0in}

% Sections formatting
\\titleformat{\\section}{
  \\vspace{-4pt}\\scshape\\raggedright\\large\\bfseries
}{}{0em}{}[\\color{black}\\titlerule \\vspace{-5pt}]

% Ensure that generate pdf is machine readable/ATS parsable
\\pdfgentounicode=1

%-------------------------
% Custom commands
\\newcommand{\\resumeItem}[1]{
  \\item\\small{
    {#1 \\vspace{-2pt}}
  }
}

\\newcommand{\\classesList}[4]{
    \\item\\small{
        {#1 #2 #3 #4 \\vspace{-2pt}}
  }
}

\\newcommand{\\resumeSubheading}[4]{
  \\vspace{-2pt}\\item
    \\begin{tabular*}{1.0\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
      \\textbf{#1} & \\textbf{\\small #2} \\\\
      \\textit{\\small#3} & \\textit{\\small #4} \\\\
    \\end{tabular*}\\vspace{-7pt}
}

\\newcommand{\\resumeSubSubheading}[2]{
    \\item
    \\begin{tabular*}{0.97\\textwidth}{l@{\\extracolsep{\\fill}}r}
      \\textit{\\small#1} & \\textit{\\small #2} \\\\
    \\end{tabular*}\\vspace{-7pt}
}

\\newcommand{\\resumeProjectHeading}[2]{
    \\item
    \\begin{tabular*}{1.001\\textwidth}{l@{\\extracolsep{\\fill}}r}
      \\small#1 & \\textbf{\\small #2}\\\\
    \\end{tabular*}\\vspace{-7pt}
}

\\newcommand{\\resumeSubItem}[1]{\\resumeItem{#1}\\vspace{-4pt}}

\\renewcommand\\labelitemi{$\\vcenter{\\hbox{\\tiny$\\bullet$}}$}
\\renewcommand\\labelitemii{$\\vcenter{\\hbox{\\tiny$\\bullet$}}$}

\\newcommand{\\resumeSubHeadingListStart}{\\begin{itemize}[leftmargin=0.0in, label={}]}
\\newcommand{\\resumeSubHeadingListEnd}{\\end{itemize}}
\\newcommand{\\resumeItemListStart}{\\begin{itemize}}
\\newcommand{\\resumeItemListEnd}{\\end{itemize}\\vspace{-5pt}}

%-------------------------------------------
%%%%%%  CV STARTS HERE  %%%%%%%%%%%%%%%%%%%%%%%%%%%%
\\begin{document}

%----------HEADING-----------------
\\begin{center}
{\\Huge \\scshape ${data.name}} \\\\
\\vspace{2pt}
\\small
${data.address} \\\\
\\faPhone\\ \\href{tel:${data.phone}}{\\underline{${data.phone}}} \\
\\faEnvelope\\ \\href{mailto:${data.email}}{\\underline{${data.email}}} \\
\\faLinkedin\\ \\href{${data.linkedin}}{\\underline{linkedin}} \\
\\faGithub\\ \\href{${data.github}}{\\underline{github}}
\\end{center}

%----------- EDUCATION -----------
\\vspace{-20pt}
\\section{Education}
\\begin{itemize}[leftmargin=*]
    \\item 
        \\textbf{${data.clg}} \\hfill \\textbf{${data.clgeducationDates}} \\\\
        \\textbf{${data.clgdegree}-${data.clgbranch}} \\hfill\\textit{${data.clglocation}}
\\end{itemize}
\\vspace{-20pt}

\\begin{itemize}[leftmargin=*]
    \\item 
        \\textbf{${data.school}} \\hfill \\textbf{${data.educationDates}} \\\\
        \\textbf{${data.degree}(${data.stream})} \\hfill\\textit{${data.location}}
\\end{itemize}

%---------- COURSEWORK ----------
\\vspace{-18pt}
\\section{Relevant Coursework}
% \\vspace{-15pt}
\\begin{multicols}{3}
\\begin{itemize}[itemsep=-3pt, parsep=3pt]
  \\item ${data.course1}
  \\item ${data.course2}
  \\item ${data.course3}
  \\item ${data.course4}
  \\item ${data.course5}
  \\item ${data.course6}
\\end{itemize}
\\end{multicols} 

%---------- PROJECTS ----------
\\vspace{-5pt}
\\section{Projects}
\\begin{itemize}[leftmargin=*]
    \\item \\textbf{\\large{\\underline{\\href{${data.project1link}}{${data.project1}}}}} \\faLink 
    $|$ \\emph{${data.project1Tech}} \\hfill \\textbf{${data.project1Date}}
    
    \\begin{itemize}[itemsep=0pt, parsep=3pt]
    \\vspace{-10pt}
        \\item ${data.project1des1}
        \\item ${data.project1des2}
        \\item ${data.project1des3}
    \\end{itemize}
\\end{itemize}
\\vspace{-20pt}

\\begin{itemize}[leftmargin=*]
    \\item \\textbf{\\large{\\underline{\\href{${data.project2link}}{${data.project2}}}}} \\faLink
    $|$\\emph{${data.project2Tech}} \\hfill \\textbf{${data.project2Date}}
    \\begin{itemize}[itemsep=0pt, parsep=3pt]
    \\vspace{-8pt}
        \\item ${data.project2des1}
        \\item ${data.project2des2}
        \\item ${data.project2des3}
    \\end{itemize}
\\end{itemize}
\\vspace{-20pt}

\\begin{itemize}[leftmargin=*]
    \\item \\textbf{\\large{\\underline{\\href{${data.project3link}}{${data.project3}}}}} \\faLink
    $|$\\emph{${data.project3Tech}} \\hfill \\textbf{${data.project3Date}}
    \\begin{itemize}[itemsep=0pt, parsep=3pt]
    \\vspace{-8pt}
        \\item ${data.project3des1}
        \\item ${data.project3des2}
        \\item ${data.project3des3}
    \\end{itemize}
\\end{itemize}

%-----------EXPERIENCE-----------------
\\vspace{-15pt}
\\section{Experience}
\\resumeSubHeadingListStart

\\resumeSubheading{${data.company1}}{${data.companyLocation1}}{\\textbf{${data.jobTitle1}}}{\\textbf{${data.jobDates1}}}
\\resumeItemListStart
\\item{${data.company1des1}}
\\item {${data.company1des2}}
\\resumeItemListEnd

\\resumeSubheading{${data.company2}}{${data.companyLocation2}}{\\textbf{${data.jobTitle2}}}{\\textbf{${data.jobDates2}}}
\\resumeItemListStart
\\item {${data.company2des1}}
\\item {${data.company2des2}}
\\resumeItemListEnd

\\resumeSubHeadingListEnd



%---------- SKILLS ----------
\\vspace{-15pt}
\\section{Technical Skills}
\\begin{itemize}[leftmargin=*]
  \\item \\textbf{Languages:} ${data.languages}
  \\vspace{-8pt}
  \\item \\textbf{Tools:} ${data.tools}
  \\vspace{-8pt}
  \\item \\textbf{Frameworks:} ${data.technologies}
\\end{itemize}

%---------- CERTIFICATIONS ----------
\\vspace{-15pt}
\\section{Certifications}
% \\vspace{pt}
% \\begin{multicols}{3}

\\begin{itemize}[itemsep=50pt, parsep=-50pt]
  \\item \\href{${data.certificationLink1}}{${data.certification1}}
  \\item \\href{${data.certificationLink2}}{${data.certification2}}
  \\item
  \\href{${data.certificationLink3}}{${data.certification3}}
\\end{itemize}
\\end{document}

  `;
  }
=======
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error generating resume. Please try again.');
    });
});

updateNavigation();
>>>>>>> ea60ef9 (ui update)
