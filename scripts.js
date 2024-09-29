// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    // عند تمرير الماوس فوق الأدوات
    const tools = document.querySelectorAll('.tool');
    tools.forEach(tool => {
        tool.addEventListener('mouseover', () => {
            tool.style.backgroundColor = '#e0f7fa';
        });
        tool.addEventListener('mouseout', () => {
            tool.style.backgroundColor = '#fff';
        });
    });

    // التمرير إلى الأقسام
    const contactSection = document.getElementById('contact');
    const pythonToolsSection = document.getElementById('python-tools');
    const batToolsSection = document.getElementById('bat-tools');

    document.querySelector('#scroll-to-python').addEventListener('click', function() {
        pythonToolsSection.scrollIntoView({ behavior: 'smooth' });
    });

    document.querySelector('#scroll-to-bat').addEventListener('click', function() {
        batToolsSection.scrollIntoView({ behavior: 'smooth' });
    });
});
// scripts.js

// فتح صفحة الأداة
function openPage(pageUrl) {
    window.location.href = pageUrl;
}

// عند تمرير الماوس فوق الأدوات
document.addEventListener('DOMContentLoaded', function() {
    const tools = document.querySelectorAll('.tool');
    tools.forEach(tool => {
        tool.addEventListener('mouseover', () => {
            tool.style.backgroundColor = '#e0f7fa';
        });
        tool.addEventListener('mouseout', () => {
            tool.style.backgroundColor = '#fff';
        });
    });
});