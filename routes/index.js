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
 },
 {
  'id':21,'Term':'SandBox','Defination':'A virtual netowork of computer is comparable to a computer sandbox. If we abruptly  delete something or make a mistake inside our network territory in computer . Only the contents of the network , not your computer itself, can be damaged if someone tries to break through it, and how much harm they cause depends on their level of expert knowledge.  ',
 'Refrences':'Technologies, M. (2021). Basic Terminologies of Docker - Docker Tutorial. [online] Mindmajix. Available at: https://mindmajix.com/docker/basic-terminologies-of-docker"'
 },{
  'id':22,'Term':'Docker Container','Defination':'Docker containers are like a storage device  to have dynamic clones of Docker images. Multiple containers can be created from a single image, assuring DevOps consistency. The key benefit is process isolation. They are built layer by layer on top of images, the fundamental building block of Docker containers, and are transient (writable nature). ',
 'Refrences':'Technologies, M. (2021). Basic Terminologies of Docker - Docker Tutorial. [online] Mindmajix. Available at: https://mindmajix.com/docker/basic-terminologies-of-docker"'
 },
 {
  'id':23,'Term':'Docker Images','Defination':'Docker images  can easily be shared on any platform or store them like files. To save space and allow for part reuse, they are stored in docker containers. Furthermore, Docker images are fixed and unchangable once they are created, so unless you not updating them, their contents wont change. ',
 'Refrences':'Technologies, M. (2021). Basic Terminologies of Docker - Docker Tutorial. [online] Mindmajix. Available at: https://mindmajix.com/docker/basic-terminologies-of-docker"'
 },
 {
  'id':24,'Term':'Docker Repository','Defination':' Docker repository is a digital storage warehouse for docker images through a network or the internet. It works in two different ways; you may pull images from it or push your Docker images to it.  ',
 'Refrences':'Technologies, M. (2021). Basic Terminologies of Docker - Docker Tutorial. [online] Mindmajix. Available at: https://mindmajix.com/docker/basic-terminologies-of-docker"'
 },
 {
  'id':25,'Term':'Docker Hub','Defination':'Docker Hub plays a vital role in the Docker technology and a prime illustration of a public repository. It encourages collaboration by offering features like picture hosting. Docker Hub is a versatile tool for developers that can serve as both private and public storage for Docker.',
 'Refrences':'Technologies, M. (2021). Basic Terminologies of Docker - Docker Tutorial. [online] Mindmajix. Available at: https://mindmajix.com/docker/basic-terminologies-of-docker"'
 },
 {
  'id':26,'Term':'Docker Daemon','Defination':'The Docker daemon is the engine that manages containers on the host system. Users can only communicate with it through Docker clients, who act as intermediaries and do the talking on their behalf with the daemon. ',
 'Refrences':'Technologies, M. (2021). Basic Terminologies of Docker - Docker Tutorial. [online] Mindmajix. Available at: https://mindmajix.com/docker/basic-terminologies-of-docker"'
 },
 {
  'id':27,'Term':'Docker Client','Defination':'A application called the Docker Client, which act as Docker boss, is used to communicate with Docker. Its like having the manager speak a binary dialect of the Docker language. The Docker client is responsible for transmitting commands from the Docker daemon, the worker who completes the task, to the client, after which there is back-and-forth communication between them. ',
 'Refrences':'Technologies, M. (2021). Basic Terminologies of Docker - Docker Tutorial. [online] Mindmajix. Available at: https://mindmajix.com/docker/basic-terminologies-of-docker"'
 },
 {
  'id':28,'Term':'Docker Swarm','Defination':'Docker Swarm is like a place where you can manage and access a group of Docker hosts using Docker tools. It acts as a valuable interface for Docker, so any tool talking to Docker can seamlessly use Swarm to scale across multiple hosts. It same as having a  universal control center for your Docker army. ',
 'Refrences':'Technologies, M. (2021). Basic Terminologies of Docker - Docker Tutorial. [online] Mindmajix. Available at: https://mindmajix.com/docker/basic-terminologies-of-docker"'
 },
 {
  'id':29,'Term':'Azure Container Registory','Defination':'A repository for all OCI artifact types, serving as a comprehensive archive for container images and related resources, is known as a registry for Docker and OCI images. ',
 'Refrences':'azure.microsoft.com. (n.d.). Azure Container Registry | Microsoft Azure. [online] Available at: https://azure.microsoft.com/en-us/products/container-registry"'
 },
 {
  'id':30,'Term':'Azure Storage','Defination':'An Azure storage account, which functions as a virtual safe for all of your Azure Storage data, is where blobs, files, queues, and tables are all kept. Every bit of information is given a unique address that may be accessed via web protocols (HTTP or HTTPS) from any point on the planet. ',
 'Refrences':'jimmart-dev (n.d.). Storage account overview - Azure Storage. [online] learn.microsoft.com. Available at: "https://learn.microsoft.com/en-us/azure/storage/common/storage-account-overview".'
 }
]


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SIT 722 Glossary table', Sub:'DevOps Definational Content - Its a  valuable source that would describe Devops and its important terms',names:nameList });
});

module.exports = router;
