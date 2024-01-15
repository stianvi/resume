# resume
Cloud Resume Change

# Azure github workflow for static web apps

Next step:
 - add custom domain to cdn, either cv.vikan.cloud or resume.vikan.cloud... depends on what resolves tomorrow


Challenges
1. Certification
2. HTML
3. CSS
4. Static Website
5. HTTPS using Azure CDN
6. DNS, using custom DNS name
7. Javascript - pageview counter
8. DB / CosmoDB
9. Azure function for API towards CosmoDB
10. Python 
11. Tests
12. Infrastructure as Code
13. Source Control
14. CI/CD (Back end)
15. CI/CD (Front end)
16. Blog post

Done:
1. Certification
- Passed AZ-900 and SC-900
2. HTML
- Created basic index.html, including my Azure certifications
3. CSS
- Created basic style.css that is used by index.html
4. Static Website
- Created a static website from VS Code: https://wonderful-forest-022f38b03.4.azurestaticapps.net/


13. Source Control
- Added frontend resume to 
15. CI/CD (Front end)
- Fixed signed commits from VS Code
- Fixed workflow from VS Code -> github -> Azure static web app



Trying to get ARM template to deploy CDN
- using github secrets is no easy tasks
- lacking of service principal/deployment credentials got me in trouble:
    "Error: The process '/usr/bin/az' failed with exit code 1"
    https://github.com/Azure/arm-deploy
    https://github.com/marketplace/actions/azure-login#configure-deployment-credentials

And when you finally get to see a new error message after 25 commits - you will be the happiest in the world.


6. DNS, using custom DNS name
- since I had a few hours of troubleshooting arm deployment of CDN, I ended up configuring DNS manually. This is because the DNS name won't change that often. It is more important to have proper deployment of html, css, js and py code. 
 Created a CNAME to point to the CDN endpoint.

 DNS takes forever! 

 Ended up creating a A record with alias in azure dns! That is weird because A records normally points to ip addresses.

 Didn't manage to create a custom domain in the CDN with ARM template. So manually added afterwards. As DNS is configured manually, this is not an issue.

 Adding https to the custom domain also took time - CDN needs to verify that you own domain before generating a certificate.
 CDN verify dns didn't work - so ended up using cloudflare mail forwarding to get the digicert mail. 
 https://cert-manager.io/docs/tutorials/getting-started-aks-letsencrypt/
 see screenshot 20240108-1112 - creating AKS for cert!

 Copy paste commands won't always work, luckily most have an easy fix.
 screenshot 20240108-11:16

Hopefully order-certificates.yml works...
 

acme cert get from keyvault-acmebot

CDN to read keyvault:
screenshot 20240111 22:50ish - error
screenshot 20240111 22:50ish - in gui
adding service principle that is hidden...

Found out how to enable service principle identity under CDN option :) 
Then it finally solved itself..

Sucess!! next task :) 

Javascript...

Initially created a short javascript to start with counter 0, increment value and alert. This to show the javascript working before creating cosmo db table and the python script.

When the python script was finished and CORS enabled, the javascript could be finished with the correct python function url to update the stored value in cosmodb.

