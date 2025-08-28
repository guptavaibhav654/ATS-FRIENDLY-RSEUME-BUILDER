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

        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'resume.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);

    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error generating resume. Please try again.');
    });
});
