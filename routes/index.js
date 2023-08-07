var express = require('express');
var router = express.Router();


const nameList =[
 { 'id':1,'Term':'Devops','Defination':'DevOps enables businesses to achieve a competitive edge by integrating development and operations to enhance software development, delivery efficiency, speed, and security ',
 'Refrences':'GitLab (2022). DevOps explained. [online] GitLab. Available at:"https://about.gitlab.com/topics/devops/".'
 },{
  'id':2,'Term':'Automation of the software development lifecycle','Defination':'DevOps streamlines software delivery by automating testing, builds, releases, provisioning, and other manual tasks, reducing human errors and accelerating the process. ',
 'Refrences':'GitLab (2022). DevOps explained. [online] GitLab. Available at:"https://about.gitlab.com/topics/devops/".'
 },{
  'id':3,'Term':'Collaboration and communication','Defination':'A great DevOps team excels with automation, complemented by effective collaboration and communication for seamless software delivery.',
 'Refrences':'GitLab (2022). DevOps explained. [online] GitLab. Available at:"https://about.gitlab.com/topics/devops/".'
 },
 {
  'id':4,'Term':'Continuous improvement and minimization of waste','Defination':'High-performing DevOps teams continually seek improvement by automating tasks and analyzing performance metrics to enhance release efficiency and mean-time-to-recovery. ',
 'Refrences':'GitLab (2022). DevOps explained. [online] GitLab. Available at:"https://about.gitlab.com/topics/devops/".'
 }
 ,{
  'id':5,'Term':'Hyperfocus on user needs with short feedback loops','Defination':'DevOps enables teams to prioritize users needs through automation, effective collaboration, and continuous improvement, leading to a better understanding of user requirements and efficient delivery of their desired solutions. ',
 'Refrences':'GitLab (2022). DevOps explained. [online] GitLab. Available at:"https://about.gitlab.com/topics/devops/".'
 },
 {
  'id':6,'Term':'NetApp','Defination':'NetApp empowers DevOps by enabling operations teams to automate infrastructure and developers to work in reliable, predictable environments with reduced friction, resulting in better business outcomes and enhanced developer productivity across on-premises and cloud environments. ',
 'Refrences':'netapp (n.d.). What Is DevOps? - Practices and Benefits Explained | NetApp. [online] www.netapp.com. Available at:"https://www.netapp.com/devops-solutions/what-is-devops/.'
 },
 {
  'id':7,'Term':'DevSecOps','Defination':'DevSecOps extends DevOps by integrating security practices into the development lifecycle, empowering delivery teams to implement security controls early on, and conducting security testing in static, software composition, and dynamic areas. ',
 'Refrences':'Wikipedia Contributors (2019). DevOps. [online] Wikipedia. Available at:"https://en.wikipedia.org/wiki/DevOps".'
 },
 {
  'id':8,'Term':'GitOps','Defination':'GitOps enhances security by version-controlling deployment configurations, allowing changes to be managed through code review and enabling quick issue tracing and reproduction, leading to improved overall security. ',
 'Refrences':'Wikipedia Contributors (2019). DevOps. [online] Wikipedia. Available at:"https://en.wikipedia.org/wiki/DevOps".'
 },
 {
  'id':9,'Term':'Artificial Intelligence','Defination':'Defining intelligence is crucial in assessing if an artificial system truly qualifies for AI, as it involves a machine ability to perform tasks that would have required human intelligence. ',
 'Refrences':'Diaz, M. (2023). What Is AI? Here’s Everything You Need to Know about Artificial Intelligence. [online] ZDNet. Available at:"https://www.zdnet.com/article/what-is-ai-heres-everything-you-need-to-know-about-artificial-intelligence/".'
 },
 {
  'id':10,'Term':'Black Box Testing','Defination':'Dynamic code analysis, as an automated black box security testing method, evaluates application functionality, security, performance, and other aspects without access to the system internals. ',
 'Refrences':'Check Point Software. (n.d.). What is Black Box Testing? [online] Available at: "https://www.checkpoint.com/cyber-hub/cyber-security/what-is-penetration-testing/what-is-black-box-testing/#:~:text=Black%20box%20testing%2C%20a%20form."'
 },
 {
  'id':11,'Term':'Devops Observability','Defination':'When devops is combined with continuous automation and AI-assisted support, it promises to give the practical solutions needed to ensure corresponding applications run perfectly and cross-collaborative teams produce the finest user experiences and business outcomes imaginable. ',
 'Refrences':'Dynatrace. (n.d.). Observability for cloud-native environments. [online] Available at:"https://www.dynatrace.com/resources/ebooks/observability-and-beyond-for-the-enterprise-cloud/">."'
 },
 {
  'id':12,'Term':'Service Level Objectives','Defination':'While SLOs are essential for aligning technical goals with business goals, they are not always easy to define. Many issues arise as a result of operational overburden. Enterprises now have a plethora of metrics to track and measure, but having a lot of alternatives does not ensure having useful information. ',
 'Refrences':'Team, D.E. (2023). SLOs done right: how DevOps teams can build better service-level objectives. [online] Dynatrace news.Available at:"https://www.dynatrace.com/news/blog/slos-done-right/">."'
 },
 {
  'id':13,'Term':'Kanban Methodology ','Defination':'a product development management strategy that stresses continuous delivery without overburdening the development team. Kanban, like Scrum, is a method for improving team cooperation. ',
 'Refrences':'www.synopsys.com. (n.d.). What Is DevOps and How Does It Work? | Synopsys.  Available at:"https://www.synopsys.com/glossary/what-is-devops.html#:~:text=DevOps%20(a%20portmanteau%20of%20%E2%80%9Cdevelopment,than%20traditional%20software%20development%20processes>."'
 },
 {
  'id':14,'Term':'Scaled Agile Framework (SAFe)','Defination':'a set of organizational and operational patterns intended to assist firms in scaling lean and agile processes. SAFe is one of an increasing number of frameworks targeted at tackling the challenges that develop when a single teams size is increased beyond its current capacity. ',
 'Refrences':'www.synopsys.com. (n.d.). What Is DevOps and How Does It Work? | Synopsys.  Available at:"https://www.synopsys.com/glossary/what-is-devops.html#:~:text=DevOps%20(a%20portmanteau%20of%20%E2%80%9Cdevelopment,than%20traditional%20software%20development%20processes>."'
 },
 {
  'id':15,'Term':'Lean Development','Defination':'a translation of lean manufacturing principles and methods to the software development arena. To enable agile enterprises, Lean provides a conceptual framework, values, and principles, as well as experience-based best practices. ',
 'Refrences':'www.synopsys.com. (n.d.). What Is DevOps and How Does It Work? | Synopsys.  Available at:"https://www.synopsys.com/glossary/what-is-devops.html#:~:text=DevOps%20(a%20portmanteau%20of%20%E2%80%9Cdevelopment,than%20traditional%20software%20development%20processes>."'
 },
 {
  'id':16,'Term':'Extreme Programming','Defination':'a software development methodology aimed at improving software quality and responsiveness to changing client needs. XP allows frequent releases in short development cycles to enhance productivity and create checkpoints where new client requirements can be answered. ',
 'Refrences':'www.synopsys.com. (n.d.). What Is DevOps and How Does It Work? | Synopsys.  Available at:"https://www.synopsys.com/glossary/what-is-devops.html#:~:text=DevOps%20(a%20portmanteau%20of%20%E2%80%9Cdevelopment,than%20traditional%20software%20development%20processes>."'
 },
 {
  'id':17,'Term':'Microservices','Defination':'The microservices architecture is a design strategy for building a single application out of a collection of small services. Each service runs its own process and communicates with other services via a lightweight mechanism accessible via a well-defined interface. Microservices can be constructed with a variety of frameworks or programming languages and delivered as a single or a series of services. ',
 'Refrences':'www.synopsys.com. (n.d.). What Is DevOps and How Does It Work? | Synopsys.  Available at:"https://www.synopsys.com/glossary/what-is-devops.html#:~:text=DevOps%20(a%20portmanteau%20of%20%E2%80%9Cdevelopment,than%20traditional%20software%20development%20processes>."'
 },
 {
  'id':18,'Term':'Application Release Automation(ARA)','Defination':'The process of packaging and releasing an update, feature, or application from development to production in a consistent and repeatable manner utilizing tools, scripts, or solutions is known as automated release administration (ARA). ',
 'Refrences':'Plutora. (n.d.). DevOps DevOps Terminology: A Glossary. [online] Available at:"https://www.plutora.com/devops-at-scale/terminology-glossary">."'
 },
 {
  'id':19,'Term':'Cloud Computing','Defination':'The distribution of processing power, database storage, software, and other IT resources via the internet (rather than your computers hard drive) is referred to as cloud computing. ',
 'Refrences':'Plutora. (n.d.). DevOps DevOps Terminology: A Glossary. [online] Available at:"https://www.plutora.com/devops-at-scale/terminology-glossary">"'
 },
 {
  'id':20,'Term':'Complex-Adaptive System (CAS)','Defination':'A system in which complete understanding of the individual components does not imply complete understanding of the systems behavior.Examples include goverments,  markets, and climates ',
 'Refrences':'Plutora. (n.d.). DevOps DevOps Terminology: A Glossary. [online] Available at:"https://www.plutora.com/devops-at-scale/terminology-glossary">"'
 }
]


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SIT 722 Glossary table', Sub:'DevOps Definational Content - Its a  valuable source that would describe Devops and its important terms',names:nameList });
});

module.exports = router;
