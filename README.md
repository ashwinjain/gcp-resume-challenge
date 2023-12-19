# gcp-resume-challenge
**Resume challenge for AmFam Insurance**

**Intro**\
This is my solution for the Google Cloud Resume Challenge. I used HTML and CSS to render the frontend of the website, which is hosted on the Google Cloud Platform. Using a load balancer, I was able to handle traffic to a specific IP address, and then serve data stored in a backend bucket in the Google Cloud. I further registered a domain name using Cloud Domains, and stored its specific ip address(the one of the load balancer) in Google Cloud's DNS. Lastly, I leveraged Firebase to store data about how many people have visited my website, and I display that counter in the header itself.

**Technologies Used**
- HTML, CSS, JavaScript
- Google Cloud Platform
- Cloud Domains
- Cloud DNS
- Firebase

**Learning**\
I learned a TON about Google Cloud Platform and the various technologies it has to offer. Prior to this challenge, my instinctual way to host a static website would be through Github, where it was free and I didn't have to worry about the intricacies behind actually serving a website. While I have just barely scratched the surface, this resume challenge gave me the motivation to learn what actually needs to be implemented behind the scenes so that your website can be made publically available to the world.

**Difficulties**
- The biggest challenge was mainly getting started. I have used GCP before, but simply as an IDE through BigQuery to run SQL commands on the datasets made public by Google. This was my first experience using the technologies embedded within GCP to fully host a static website. Steps that seems simple to me now took me an hour the first time around because I wasn't sure of what exactly I needed in order to deliver the respective step. Some examples include certifications, setting up standards for my dns, etc...
- Step 9 is also posing some challenges. This primarily stems from my lack of true understanding on what this step is asking us to do. I'm confident that when I spend more time on it, I will be able to successfully complete this step of creating an API middle man between Firestore and the JavaScript code.

**Next Steps**\
I plan on finishing the rest of this challenge. I am proud of my website, but there are a lot of further optimizations that can be done, including https triggered serverless functions, CI/CD, and more. I am sure that I will learn as much, if not more, by completing the rest of this challenge.
