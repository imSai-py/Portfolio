"""
Generate a professional placeholder resume PDF for the portfolio.
This creates a clean, modern-looking resume PDF at static/assets/resume.pdf.
"""
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor
from reportlab.pdfgen import canvas
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.platypus import Paragraph
from reportlab.lib.enums import TA_LEFT, TA_CENTER
import os

def create_resume():
    output_path = os.path.join("static", "assets", "resume.pdf")
    c = canvas.Canvas(output_path, pagesize=letter)
    width, height = letter

    # Colors
    dark = HexColor("#1a1a2e")
    accent = HexColor("#0f3460")
    gray = HexColor("#555555")
    light_gray = HexColor("#888888")
    line_color = HexColor("#e0e0e0")

    # ─── Header Section ───
    # Dark header background
    c.setFillColor(dark)
    c.rect(0, height - 120, width, 120, fill=True, stroke=False)

    # Name
    c.setFillColor(HexColor("#ffffff"))
    c.setFont("Helvetica-Bold", 28)
    c.drawString(60, height - 55, "SAI LAKSHMAN")

    # Title
    c.setFont("Helvetica", 13)
    c.setFillColor(HexColor("#aabbcc"))
    c.drawString(60, height - 78, "Computer Science Student  |  Web Developer")

    # Contact info
    c.setFont("Helvetica", 10)
    c.setFillColor(HexColor("#8899aa"))
    c.drawString(60, height - 100, "sailakshman212005@gmail.com  •  +91 93615 73798  •  Chennai, Tamil Nadu, India")

    # ─── Body ───
    y = height - 155

    def draw_section_title(title, y_pos):
        c.setFont("Helvetica-Bold", 13)
        c.setFillColor(accent)
        c.drawString(60, y_pos, title.upper())
        c.setStrokeColor(accent)
        c.setLineWidth(1.5)
        c.line(60, y_pos - 6, width - 60, y_pos - 6)
        return y_pos - 28

    def draw_text(text, y_pos, font="Helvetica", size=10, color=gray, indent=60):
        c.setFont(font, size)
        c.setFillColor(color)
        c.drawString(indent, y_pos, text)
        return y_pos - 17

    def draw_bullet(text, y_pos, indent=75):
        c.setFont("Helvetica", 10)
        c.setFillColor(gray)
        c.drawString(indent - 10, y_pos, "•")
        c.drawString(indent, y_pos, text)
        return y_pos - 17

    # ─── Objective ───
    y = draw_section_title("Objective", y)
    y = draw_text("Aspiring web developer seeking opportunities to apply my skills in HTML, CSS, JavaScript,", y)
    y = draw_text("and Python frameworks to build impactful, user-friendly web applications.", y)
    y -= 10

    # ─── Education ───
    y = draw_section_title("Education", y)
    y = draw_text("Bachelor of Computer Science", y, font="Helvetica-Bold", size=11, color=dark)
    y = draw_text("University Name  •  2022 – Present", y, color=light_gray, size=9)
    y = draw_bullet("Relevant coursework: Data Structures, Web Development, Database Systems", y)
    y = draw_bullet("CGPA: X.XX / 10", y)
    y -= 10

    # ─── Skills ───
    y = draw_section_title("Technical Skills", y)
    y = draw_text("Languages:", y, font="Helvetica-Bold", size=10, color=dark)
    y = draw_text("Python, JavaScript, HTML5, CSS3, SQL", y, indent=75)
    y += 2
    y = draw_text("Frameworks:", y, font="Helvetica-Bold", size=10, color=dark)
    y = draw_text("Flask, Django, Bootstrap, React (learning)", y, indent=75)
    y += 2
    y = draw_text("Tools:", y, font="Helvetica-Bold", size=10, color=dark)
    y = draw_text("Git, GitHub, VS Code, Figma, Postman", y, indent=75)
    y -= 10

    # ─── Projects ───
    y = draw_section_title("Projects", y)

    y = draw_text("ExpenseSnap — Expense Tracking Web App", y, font="Helvetica-Bold", size=11, color=dark)
    y = draw_bullet("Built a full-stack expense tracker with user authentication and dashboard", y)
    y = draw_bullet("Technologies: HTML, CSS, JavaScript, Flask, SQLite", y)
    y -= 6

    y = draw_text("UserProfileManagement — Profile Management System", y, font="Helvetica-Bold", size=11, color=dark)
    y = draw_bullet("Developed a CRUD application for managing user profiles", y)
    y = draw_bullet("Technologies: Python, Flask, HTML, CSS, Bootstrap", y)
    y -= 6

    y = draw_text("Portfolio Website — Personal Portfolio", y, font="Helvetica-Bold", size=11, color=dark)
    y = draw_bullet("Designed and developed a responsive portfolio to showcase projects", y)
    y = draw_bullet("Technologies: HTML, CSS, JavaScript, Flask", y)
    y -= 10

    # ─── Links ───
    y = draw_section_title("Links", y)
    y = draw_text("LinkedIn:", y, font="Helvetica-Bold", size=10, color=dark)
    y = draw_text("linkedin.com/in/sai-lakshman-390b08295", y, indent=75, color=accent)
    y += 2
    y = draw_text("GitHub:", y, font="Helvetica-Bold", size=10, color=dark)
    y = draw_text("github.com/imSai-py", y, indent=75, color=accent)

    # ─── Footer ───
    c.setFont("Helvetica", 8)
    c.setFillColor(light_gray)
    c.drawCentredString(width / 2, 30, "This is a placeholder resume. Replace static/assets/resume.pdf with your actual resume.")

    c.save()
    print(f"Resume PDF created at: {output_path}")

if __name__ == "__main__":
    create_resume()
