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
 }
]


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SIT 722 Glossary table', Sub:'DevOps Definational Content - Its a  valuable source that would describe Devops and its important terms',names:nameList });
});

module.exports = router;
