import os
import shutil
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, Table, TableStyle

def build_pdf():
    pdf_path = os.path.join("static", "assets", "resume.pdf")
    os.makedirs(os.path.dirname(pdf_path), exist_ok=True)
    
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=36,
        bottomMargin=36
    )

    styles = getSampleStyleSheet()

    # Custom typography & styles
    styles.add(ParagraphStyle(
        name='ResumeName',
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=22,
        textColor=colors.HexColor('#000000'),
        spaceAfter=2
    ))

    styles.add(ParagraphStyle(
        name='ResumeTitle',
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=13,
        textColor=colors.HexColor('#222222'),
        spaceAfter=4
    ))

    styles.add(ParagraphStyle(
        name='ContactLine',
        fontName='Helvetica',
        fontSize=9,
        leading=11,
        textColor=colors.HexColor('#333333'),
        spaceAfter=2
    ))

    styles.add(ParagraphStyle(
        name='SectionHeading',
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=13,
        textColor=colors.HexColor('#000000'),
        spaceBefore=8,
        spaceAfter=2,
        textTransform='uppercase'
    ))

    styles.add(ParagraphStyle(
        name='BodyTextCustom',
        fontName='Helvetica',
        fontSize=9,
        leading=11.5,
        textColor=colors.HexColor('#222222'),
        spaceAfter=3
    ))

    styles.add(ParagraphStyle(
        name='BulletItem',
        fontName='Helvetica',
        fontSize=8.5,
        leading=11,
        textColor=colors.HexColor('#222222'),
        leftIndent=12,
        firstLineIndent=-8,
        spaceAfter=2
    ))

    styles.add(ParagraphStyle(
        name='RightText',
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=11,
        alignment=2, # Right
        textColor=colors.HexColor('#000000')
    ))

    story = []

    # 1. Header
    story.append(Paragraph("SAI LAKSHMAN", styles['ResumeName']))
    story.append(Paragraph("Backend Developer", styles['ResumeTitle']))
    story.append(Paragraph("Chennai, Tamil Nadu | +91 93615 73798 | sailakshman212005@gmail.com", styles['ContactLine']))
    story.append(Paragraph("github.com/imSai-py | linkedin.com/in/sai-lakshman-390b08295 | portfolio-sai-lakshmans-projects-2627b503.vercel.app", styles['ContactLine']))
    story.append(Spacer(1, 4))

    def add_section_header(title):
        story.append(Paragraph(title, styles['SectionHeading']))
        story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor('#000000'), spaceBefore=1, spaceAfter=4))

    # 2. SUMMARY
    add_section_header("SUMMARY")
    summary_text = (
        "Computer science undergraduate (B.Sc., 2026) who builds and ships backend services in Python and Java. "
        "Designed, built, and deployed ExpenseSnap, a live personal finance PWA running on a Flask REST API with "
        "20+ endpoints, PostgreSQL, Google OAuth 2.0, and Gemini Vision receipt scanning. Looking for a backend "
        "engineering internship or entry-level role."
    )
    story.append(Paragraph(summary_text, styles['BodyTextCustom']))
    story.append(Spacer(1, 3))

    # 3. SKILLS
    add_section_header("SKILLS")
    skills_data = [
        ("<b>Languages:</b>", "Python, Java, TypeScript, JavaScript, SQL"),
        ("<b>Backend:</b>", "Flask, Django, Spring Boot, SQLAlchemy, REST API design, OAuth 2.0, Web Push (VAPID), Flask-Migrate"),
        ("<b>Frontend:</b>", "React 19, TypeScript, Vite, Tailwind CSS v4, Framer Motion"),
        ("<b>Databases:</b>", "PostgreSQL, SQLite, MongoDB, schema design"),
        ("<b>Cloud and tooling:</b>", "Firebase Hosting, Firebase Cloud Functions, Render, Git, GitHub, CI/CD"),
        ("<b>AI and data:</b>", "Google Gemini Vision API, LLM API integration, Pandas, Matplotlib, ReportLab"),
        ("<b>Concepts:</b>", "OOP, MVC and MVT, third-party API integration, performance optimization, AI-assisted development workflow")
    ]
    for label, val in skills_data:
        story.append(Paragraph(f"{label} {val}", styles['BodyTextCustom']))
    story.append(Spacer(1, 3))

    # 4. EXPERIENCE
    add_section_header("EXPERIENCE")
    exp_table_data = [
        [
            Paragraph("<b>Full Stack Developer Intern</b>, RETECH Solutions, Chennai", styles['BodyTextCustom']),
            Paragraph("Jun 2025", styles['RightText'])
        ]
    ]
    t = Table(exp_table_data, colWidths=[420, 120])
    t.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t)
    story.append(Spacer(1, 2))
    
    exp_bullets = [
        "Built and deployed UserProfile Manager, a Django web app with user registration, session-based authentication, profile photo upload, and editable bio data on SQLite.",
        "Structured the app on Django's MVT pattern with server-side form validation and tuned SQLite query patterns for faster data handling.",
        "Owned the feature end to end: API and schema design, frontend integration, debugging, testing, production deployment, and version control in Git."
    ]
    for b in exp_bullets:
        story.append(Paragraph(f"• {b}", styles['BulletItem']))
    story.append(Spacer(1, 3))

    # 5. PROJECTS
    add_section_header("PROJECTS")
    proj_header_data = [
        [
            Paragraph("<b>ExpenseSnap, live PWA</b> | github.com/imSai-py/ExpenseSnap", styles['BodyTextCustom']),
            Paragraph("", styles['RightText'])
        ]
    ]
    tp = Table(proj_header_data, colWidths=[420, 120])
    tp.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(tp)
    story.append(Paragraph("<i>React 19, TypeScript, Python Flask, PostgreSQL, SQLAlchemy, Google Gemini Vision, Firebase, Web Push</i>", styles['BodyTextCustom']))
    story.append(Spacer(1, 2))

    proj_bullets = [
        "Built and shipped a personal finance PWA as a solo project: a modular Flask REST API with 20+ endpoints, a PostgreSQL schema managed with Flask-Migrate, expense CRUD, income tracking, and a real-time analytics dashboard.",
        "Added receipt scanning with the Google Gemini Vision API, which reads merchant, date, amount, and category off a photo, plus SnapBot, an LLM chat assistant that logs expenses from plain English and answers spending questions.",
        "Shipped CSV and XLS bulk import with row-level validation, PDF reports through ReportLab, monthly budget alerts, and Web Push notifications over VAPID.",
        "Split the backend into separate authentication, AI, and notification service modules, wired up Google OAuth 2.0 sign-in, and managed frontend state with React Context across six feature modules.",
        "Deployed to Firebase Hosting with Cloud Functions and a hosted PostgreSQL database."
    ]
    for b in proj_bullets:
        story.append(Paragraph(f"• {b}", styles['BulletItem']))
    story.append(Spacer(1, 3))

    # 6. EDUCATION
    add_section_header("EDUCATION")
    edu1 = [
        [
            Paragraph("<b>B.Sc. Computer Science</b>, VISTAS (Vels Institute of Science, Technology and Advanced Studies), Chennai", styles['BodyTextCustom']),
            Paragraph("2023 - 2026", styles['RightText'])
        ]
    ]
    t_edu1 = Table(edu1, colWidths=[420, 120])
    t_edu1.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_edu1)
    story.append(Paragraph("CGPA: 7.63 / 10", styles['BodyTextCustom']))
    story.append(Spacer(1, 2))

    edu2 = [
        [
            Paragraph("<b>Higher Secondary (HSC)</b>, Sri Sankara Vidyashramam Matric. Hr. Sec. School, Chennai", styles['BodyTextCustom']),
            Paragraph("2023", styles['RightText'])
        ]
    ]
    t_edu2 = Table(edu2, colWidths=[420, 120])
    t_edu2.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_edu2)
    story.append(Spacer(1, 3))

    # 7. CERTIFICATIONS
    add_section_header("CERTIFICATIONS")
    cert1 = [
        [
            Paragraph("<b>Java Full Stack Developer</b>, AISECT India. Core Java, OOP, Spring Boot REST APIs, HTML5, CSS3, JavaScript", styles['BodyTextCustom']),
            Paragraph("Mar - May 2026", styles['RightText'])
        ]
    ]
    t_cert1 = Table(cert1, colWidths=[410, 130])
    t_cert1.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_cert1)
    story.append(Spacer(1, 2))

    cert2 = [
        [
            Paragraph("<b>The Complete Python Bootcamp: Zero to Hero in Python</b>, Udemy. OOP, decorators, collections, file I/O, Tkinter", styles['BodyTextCustom']),
            Paragraph("Jul 2025", styles['RightText'])
        ]
    ]
    t_cert2 = Table(cert2, colWidths=[410, 130])
    t_cert2.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_cert2)

    doc.build(story)
    print(f"Generated PDF successfully at {pdf_path}")

    # Copy to react public directory
    react_public_path = os.path.join("portfolio-react", "public", "resume.pdf")
    if os.path.exists(os.path.dirname(react_public_path)):
        shutil.copy2(pdf_path, react_public_path)
        print(f"Copied PDF to {react_public_path}")

    # Also copy to static/resume.pdf if used by static Flask app
    static_resume = os.path.join("static", "resume.pdf")
    shutil.copy2(pdf_path, static_resume)
    print(f"Copied PDF to {static_resume}")

if __name__ == "__main__":
    build_pdf()
