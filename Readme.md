Create a new folder and new file index.js
run 
>npm init

To run app
>node app.js

>node db-demo/mongo-test-queries.js 

Todo
read/write file
use Resize Images extension of firebase.
 if a request is made through the browser on this port number, then the server application will send a 'Hello' World' response to the client. http://localhost:8081

creating, updating and deleting data from the database
REST API, RPC AND SOAP APIs
DB Handle- SQL query
No trigger and stored procedure in mongo/node
deployment 

# Introduction to Node (server-side JavaScript)
NodeJS which is used in the backend. Node.js is a JavaScript run-time environment. The Node run-time environment covers everything you need to execute a program written in JavaScript. With this, we can make server-side apps. Express module is a Node.js web framework. As we know Developers mostly use Nodejs, Ruby on Rails, PHP and Python etc nowadays. we can also use NodeJS with meteor. Twitter is made on the Nodejs app.  

To deploy a NodeJS app we can use firebase(cloud database maintained by Google), GitHub and google app engine. 

With Node.JS We can create-

server-side MVC apps.

desktop apps with an Electron.

shopping cart app.

web crawler.

real-time chat app.

we can also do Web Scraping with Node.js. 

Web scraping, web harvesting, or web data extraction is data scraping used for obtaining data from websites. While web scraping can be fulfilled manually by a software user, the term typically refers to automated processes executed using a bot or web crawler means with this we can scrap millions of products from any shopping site like Amazon.

In Node, we use the node package manager(npm) and work on modules. Node.JS has a feature REPL(Read Eval Print Loop) Which is very useful in experimenting with Node.js codes and debugging JavaScript codes.


REPL describes a computer environment like a Windows console or Unix/Linux shell where a command is entered and the system responds with output in an interactive mode. REPL can be started by simply running a node on shell/console without any arguments as follows.

As we know Pure JavaScript is Unicode friendly, but it is not so for binary data. While dealing with TCP streams or the file system, it's important to handle octet streams. Node provides Buffer class which gives instances to store raw data similar to an array of integers but corresponds to a raw memory allocation outside the V8 heap.

To execute the REPL program in node-


>node

>1+2

>var a=1;

>a

>window.a // Node does not support window object

>global.a

>process


To exit from REPL

HIT ctrl+c

6 Top benefits of Node.js for real-time app development
As we know every app has real-time feature integrated into it such as messages or notifications.
1. Event-driven server
2. Data sync
3. Scalable
 Applications that are Node.js powered and based on the single-threaded model, as well as the event loop, can effectively manage client scalability requests.
4. Shareability
Node.js facilitates microservice architecture.
5. SEO friendliness
6. Proxy server

 Express JS framework which we use with NodeJS. It helps us to allow setting up middlewares to reply to HTTP Requests and dynamically provide HTML Pages based on passing arguments to templates. It also Defines a routing table that is used to achieve different actions based on the HTTP Method and URL. Express app middlewares use the callback function whose parameters are request and response objects. Express basically used to create the server.

Express Is An Open-Source Official Framework For Node.Js. Express Is Used To Build Server-Side Web Applications And APIs. It Is Critically Praised For Its Simplicity, Flexibility, Scalability And Minimalism by Node Js Developers Worldwide. Launched By TJ Holowaychuk In Nov 2010, Express JS Is Fundamentally Used Alongside Angular Or React And Forms. It is used as the Server-Side Framework Layer In MEAN Or MERN Stack.

Advantages-
Wide Support: As Said Earlier, Express.Js Has The Biggest Community Of Users In The World Among All Backend Javascript Frameworks. It Has A Large Number Of Resources Available To Bring Beginners Up To Speed.
Plugins: Unlike Meteor.Js That Is Troubled With Poor Plugin Functionality, Express Supports A Wide Variety Of Powerful Plugins To Assist Developers.
Robust: Not Only Is Express.Js Minimalist And Lightweight, But It Is Also Less Likely To Errors.
Reusability: Built-In Router In Express.Js Supports Code Reusability To Speed Up Workflow.

Difficulties With Express-
Tedious Nature: Express.Js Developers Need To Get Involved In A Lot Of Boring Manual Tasks Which Can Stretch The Development Cycle.
No Built-In Error Handling: Express Lacks One Important Feature, It Does Not Have Built-In Error Handling Which Can Make Debugging Code Very Time Consuming And Slow Down Development Time.

Top clients-
IBM, Uber, Paypal, Netflix, Airbnb, Walmart, eBay, Linkedin

Request Object
The request object describes the HTTP request and has properties for the request query string, parameters, body, HTTP headers etc. With this framework, we can do routing. routing determines the way in which an application responds to a client request to a particular endpoint.

Response Object 
The response object interprets the HTTP response that an Express app sends when it gets an HTTP request.

You can print request and response objects which provide a lot of data related to HTTP request and response including cookies, sessions, URL, etc.

Express setup
To run the programs of express.js you need to install the express dependency. You can easily set this by running a few commands.


In express programs if you change some code it will not run automatically for this you have to stop and start the server again. So to solve this problem we can use nodemon dependency.
Nodemon helps us to keep track of changes to our application by watching changed files and automatically restart the server.

To restart your nodejs app automatically use nodemon package. you have to install this dependency global or local according to requirement.
>npm install nodemon -g
update the script in package.json file-
 "scripts": {
    "serve": "nodemon index.js"
  },
To run your node file use the below command-
>npm run serve

Tip If you are getting this error then follow the above steps- 
nodemon : The term 'nodemon' is not recognized as the name of a cmdlet, function, script file, or operable program. Check the   
spelling of the name, or if a path was included, verify that the path is correct and try again.


Dependencies used to create a server using expressJS-


body-parser
This is a node.js middleware for handling JSON, Raw, Text and URL encoded form data. It Parses incoming request bodies in a middleware before your handlers, available under the req.body property. It exposes various factories to create middlewares. All middlewares will populate the req.body property with the parsed body, or an empty object ({}) if there was,0 nobody to parse (or an error was returned). 
It also Registers our created routes in the server.
Express doesn’t handle reading data from the <form> element on it’s own. We have to add another package called body-parser to gain this functionality.

cookie-parser 
Parse Cookie header and populate req.cookies with an object keyed by the cookie names.

multer
This is a node.js middleware to handle multipart/form-data.

Express compression
It reduces the downloaded amount of data that are served to users. For this, we use compression middleware for gzip compression. We use gzip, deflate/inflate compression for optimizing performance.


route syntax 
app.METHOD(PATH, HANDLER)
1) app is an instance of the express module
2) METHOD is an HTTP request method (GET, POST, PUT or DELETE)
3) PATH is a path on the server.
4) HANDLER is the function executed when the route is matched.

overview of backend development.
Backend development is just writing code that is not visible to the end-user. Actual business logic, calculations are implementing in the backend. By using front end technologies we can connect the database to the web to show all data. backend developer works in Backend development.
Backend programming can be OOP (object-oriented) or functional.

In oop, we mainly focus on the creation of objects. In this type of programming, the statement should be executed in a particular order. Popular oop lang. such as java, .net, python. They are better at catching errors.

Functional is more action-based. It uses a declarative lang. which means that statements can be executed in any order. It is commonly used for data science and popular lang. like SQL, F#, and R. It is more flexible but allowed for variables to change type makes it a little weak.
In Data science we use the pandas library to handle a large amount of data and produce the graphs.

Data Analytics - Pandas (Python), ELK (Elastic Search, Logstash, Kibana), Grafana, Prometheus

A backend developer is gradually involved in the architecture of a system. So, Application architecture, Designing infrastructure and internal design understanding is very important. Developers are using optimization algorithms and solving problems to reduce execution time. This is more challenging work than front end development. They usually have a distinct set of tools and skills. One of the most important skills that they require is a handsome amount of knowledge in these areas like SQL, databases. Most back end systems are connected to some DB which stores the data of the application. The job of a backend developer is to read or retrieving, process or storing data from a database or another data source. In the complex app, we use the database for the activities that are worked in the background. An expert developer will understand how to use different frameworks and libraries, how to use them in an app, how to structure the code, that makes the system simpler to manage. So, get a broad knowledge of the most common tech stack you will be working with. They usually build APIs, stored procedure. They are working on the cloud. Generally working on APIs how they connect software, databases, and services. They also have a good understanding of two APIs architecture SOAP and REST. SOAP is used to create a web service. Also some knowledge of Public and private API. SERVER SIDE ARCHITECTURE USe THE cloud to deploy DB and software components. The server's role is to provide file storage, security, encryption, databases, email and web services. There are various types of server.

In backend development, we use server-side or scripting languages. In this developers mainly work on the database. They handle all operations like creating, updating and deleting data from the database. All things work internally not visible to the user.

It is essential for a dynamic website because it has a large amount of content that can be handled easily by the backend.
backend developer usually working on API. These people are called developers or programmers.

The things that these developers handle are security, structure and content management.
Backend developer has the responsibility of -
· Writing server-side code.
· Writing code to interact with a DB.
· Ensuring server-side code is secure and free of vulnerabilities.
· Ensuring that code is optimised to handle large volumes of traffic.
· Deploying code online so that people can use your service.
· Write a quality unit test.
· Make login with some authentication


Must need to learn things if you want to make a good career in backend programming-
· Fundamental understanding of HTTP.
· Rest and soap APIs.
· caching mechanism- varnish, Memcached, Redis(data structure server)
· Data structures knowledge.
· Session management in a distributed environment.
· package manager
· knowledge of scripting lang.
· Best practice for security
· Testing
· Different caching strategy.
· Static analysis tools

knowledge of Different Authentication/authorization Methods-
· OAuth — Open Authentication
· Custom OAuth
· Basic Authentication
· Token Authentication
· JWT — JSON Web Tokens
· OpenID connect
· GCP Auth
· Auth.io
· Firebase Auth
· Amazon Cognito
· Microsoft ADFS
· Azure authentication
· Auth0 -  https://auth0.com/   Authentication

 REST, RPC, SOAP-
 These are several models of web services. As we know to save data to the database or writing business logic we need to do so on the backend side we can achieve this by doing communication over the network. Generally, we create an API service to send/receive data.
Following are the advantages of each service-
REST (Representational State Transfer) 
SOAP (Simple Object Access Protocol)
RPC (Remote Procedure Call)

REST is best described to work with the resources, whereas RPC is more about the actions. 
REST can use HTTP for all four CRUD (Create/Read/Update/Delete) operations. RPC is basically used to communicate across the different modules to serve user requests.
REST is noun-centric and RPC is verb-centric. 
REST is stateless.
SOAP does not require HTTP protocol while REST Working on HTTP protocol.
SOAP work on the XML while REST returns JSON.

grpc - A high performance, open source universal RPC-Remote Procedure Call framework
It can efficiently connect services in and across data centers with pluggable support for load balancing, tracing, health checking and authentication.
The main usage scenarios
Efficiently connecting polyglot services in microservices style architecture.
Connecting mobile devices, browser clients to backend services.
Generating efficient client librarie.

Why would you use gRPC?
The main usage scenarios:
Low latency, highly scalable, distributed systems.
Developing mobile clients which are communicating to a cloud server.
Designing a new protocol that needs to be accurate, efficient and language independent.
Layered design to enable extension eg. authentication, load balancing, logging and monitoring etc

used in microservices
HTTP protocols
1.0 still in use

REST vs gRPC

websocket is a protocol WS

gRPC is a replacement of HTTP

https://github.com/grpc
https://grpc.io/

In the back-end, we use server-side languages. The most popular languages and frameworks in the backend are Python, Ruby, PHP, Node JS, Golang, Rust, typescript(optional), Elixir, Scala, Erlang, Clojure, Haskell, Java, .net(c# is high-level lang.), PHP web framework, Ruby on Rails, ASP.NET MVC. Each language will differ in file size, performance, compatibility, line of code etc.

Server-Side web technologies-
Node.js-
Fast, Powerful and scalable. It is a javascript server-side framework built on a chrome v8 engine and written in c++. It is extremely powerful. These are different frameworks written in the node like Meterojs, Expressjs.


Python -
Popular, Rapid Development, great integration. 
It is used for both web and desktop development.
Its syntax is so simple compared to other langs. like java.
It is more readable, elegant, beautiful.
Ruby and Python share similarities.
Learn flask and Django (a framework to develop a web app)  with this.
The popular backend framework i.e written in python is a flask.
After flask people will move to Django. you can Build a Website Blocker real-world applications easily with python in 3 steps.
Instagram uses Django.

What u can do with python-
Cross-platform shell scripting, quick automation, simple web development.

Companies that use python-
Uber, Pinterest, Mozilla, Spotify, Quora, Pandora, Netflix, asana.

Average salary- $92k/year

PHP -
Practical, easy to deploy, WordPress & Laravel. Symfony a PHP framework to build a web application, API, microservices and web services.
This is dynamically typed lang. It means the same bit of code means something different depending on the context. It is a great lang. to learn.
Its setup is easy you have to download MAMP or WAMP and start working on that.
Learn Laravel, CodeIgniter, Drupal with this.

What u can do with PHP-
You can collect form data, generate dynamic page content, send and receive cookies, write command-line scripting, write server-side scripting and write desktop applications.

Companies that use PHP-
Facebook, Lyft, Mint, Hootsuite, Viber, Buffer, DocuSign.

Average salary- $89k/yr


Ruby -
Rapid development, strong community. Ruby on rails server-side web application framework written in Ruby.
Ruby on Rails is a web development lang. built on top of ruby programming lang.
Rails or Rails 2.0 is a server-side web app framework.
learn Sinatra with this.
It has a set of tools that allows you to simply create basic tasks.
It involves little backend work that enables developers to create and launch applications quickly.
It is fantastic for prototyping.
What can you do with ruby-
Automate repetitive task, build web applications, mobile applications, games, create a prototype

Companies that use ruby-
Airbnb, code academy, TaskRabbit, Kickstarter, rap genius, Scribd, angel list, Github

Average salary- $89k/yr.

C# -
The Official Microsoft ASP.NET lang. It is very powerful, backed by Microsoft.


Spring-
spring is an enterprise Java framework. Most popular Java EE framework. It is an open-source java platform.


Spring boot-
It is used to create web application but can also be used from command-line applications. it is an open-source framework used to create microservices. it is a java based spring framework module that provides RAD(rapid application development).


JSF(Java server faces)-
it is the standard component-oriented UI framework for the Java EE platform. it is an MVC web framework that focuses on building user interfaces. in this, we are building component-based web interfaces.


GraphQL-
it is a query language for APIS and a new way to think about Apis. it is generally used to load data from a server to the client.
It is the future of APIs. It is also Used to build APIs.

GraphDB-
it provides very powerful data modelling tools. it is a new way to store and analyse the data. it is a type of NoSQL database that utilises graph theory to store, map and query relationships. it is a collection of nodes and edges.


Relational database(RDBMS)-
MySQL, MariaDB, PostgreSQL, ms SQL, Oracle, SQL Server, Redis widely used for this purpose. These provide database environments also. 
Firebase, AWS DynamoDB, SQLite, CouchDB, AWS RDS, Cassandra, Couchbase.
Cloud Firestore
IBM DB2
Neo4j

NoSQL database-
Mongo DB is a popular DB you can use this if you want to learn the NoSQL database. Use Mlab for MongoDB (database as a service).


For Backend, you need to learn these combinations like-
Python / Django or flask
PHP / Laravel
Nodejs / express or Solr / Elastic search / Tika / Cassandra


Other things to consider learning for backend is-

Message brokers:
rabbit MQ-
rabbit MQ is a popular Message broker software that acts as a communication middleware between producers and consumers. Producers are those, who sends (publishes) messages to a broker, and consumers, who receive messages from the broker. you can do messaging with rabbitmq. it is open-source software that used the Advanced Message Queuing Protocol (AMQP). you can create a message application using rabbitmq. for this, you must have rabbitmq server installed on your system.


Kafka-
Apache Kafka is a distributed streaming platform that is used to build real-time streaming data pipelines and that adapts to data streams. it is used to handle an enormous amount of data developed by LinkedIn. this communication between client and server is done with simple. high performance, language-agnostic TCP protocol. it is a solution for big data and microservices applications.


search engine:
They basically used to search in Database
elastic search-
it is an analytics search engine based on the Lucene library. it helps up your database query game. Instead of searching on the text directly, it searches the index.
Apache Lucene


Solr-
it is an open-source search platform. it is also a search engine. we can say that it is a distributed document database with SQL support. it is a kind of search server. it is used to build search applications.


Sphinx-
the open-source search engine that allows full-text searches. we can set up sphinx with the MYSQL server. it is a kind of advanced search engine for large and e-commerce websites to get exact results.


Docker-
it is a tool designed to make it easier to create, deploy and run applications by using the container. it is a collection of PAAS(platform-as-a-service ) that uses os level virtualization to deliver software in packages. called containers. Containers are important for enhancing security, scalability and reproducibility in software development and data science.


maven
We can use maven to build docker for java web services
A maven is a build tool for enterprise java projects. it is an automation tool. it is a great project management tool that is based on POM. used for project build, dependency and documentation.


Java web service-
web service is a communication b/w client and server applications that are using the HTTP protocol. The JWS can be accessed by .NEt and PHP.


web sockets-
you can create real-time applications with that such as chat, collaborative document editing, stock trading application etc.
it defined two-way communication b/w clients and servers. it uses a completely different protocol.
Socket.IO is a JavaScript library for real-time web applications.

web socket is also a great feature i.e introduced in html5. firstly try to understand this then try with any library and framework.

Digital ocean-
build, test, maintain and scale applications of any size. it is helpful for developers. It is cloud-based.

AWS-
AWS is a cloud computing platform provided by Amazon. It provides a server as s service.

AWS lambda –
it lets you run code without managing servers. you pay according to the time you used this service. it supports the code written in java, python, node js. it is a serverless computing service provided by AWS.

Nuclio-
it is also a serverless platform build on top of Kubernetes means runs over Kubernetes and automate the development, operation and scaling of code. we can also run this on docker. it serves data faster, it provides lots of functions which the developer needed.

Profiling-
Profiling results in backend used to improve performance, debug code execution etc.

DDD(Domain-driven design)-
It consists of a set of patterns for building enterprise applications from the domain model out. it is an advance in software development for complex needs by connecting the implementation to an evolving model.

Differences between the front end and back-end development-
The front-end is referred to as the client-side. The back-end is referred to as server-side.
It involves images, content and structure. It involves business logic and data.
It generally has cross-browser issues. It has data transformation issues.
The thing that matter to these developers is user experience. This will not need in the back-end process user cannot see this directly.
They know frameworks like react, Vue, angular. They know frameworks like Laravel, express, HAPL.
Package managers used by front-end developers are NPM and Yarn. Package managers used by programmers are Gems(Ruby), pip(Python), Composer(PHP), NPM(Node.js).
Developers generally used these languages like HTML, CSS, JS. Developers generally used these languages Python, Ruby, elixir, Scala, PHP, Erlang, Clojure, Rust.
It is not necessary here they must have an idea of object-oriented programming. They have proper knowledge of data structures, algorithms.

API Development
Implement authentication and authorization
database choose : relational (like PostgreSQL and MySQL) , non-relational(like Mongo).
manage servers use cloud-based platforms that provide the infrastructure, like Heroku or Amazon Web Services.
make applications scalable

Knowledge of frameworks such as Express (Router set-up), StrongLoop, etc.
Knowledge and understanding of EventLoop architecture, promises, Axios, proficiency in REST-ful APIs, Node Debugging.
Knowledge of Data Structures and Algorithms, Node Global variables and In-built libraries (e.g. Immutable.js).
Good understanding of server-side templating languages such as Jade, EJS, etc.
https://draft.blogger.com/u/2/blog/post/edit/872124538042205077/27044193321467591

learn about Microservice Architecture

Choose your DB properly. You’ll have to support your decision in the interview. Whether you go with SQL or NoSQL, make sure you read the differences beforehand and be ready to answer questions like “why MySQL and not Postgres? why is this app better for a NoSQL?”

Make login with some authentication
Use middlewares. When you use middlewares you show you understand the different layers of an app in the backend. You can use middlewares to verify authentication or authorization, manage
sessions (Session management in a distributed environment.), append headers, write logs, cookie management, etc
Authentication is hand-rolled initially to prevent vendor lock-in.
Handle authorization properly. Look online on how to best organize roles in a database with an authorization scheme.

Handle authentication properly. Do not store plain text passwords.
Look for ‘salt hashing’, learn to manage secrets in the server. Study this over and over again until you understand how clean auth works.
salt hashing- storing password in encryption mode

new user registration

create a blog- anyone can register get a public page, create , update and delete posts

unit testing of components

Make sure you use constraints ( CHECK , NOT NULL , FOREIGN KEY , PRIMARY KEY , and DEFAULT ) to ensure that only correct data is stored in the database in the first place.
Use a CreatedBy and CreationDate field on every table.

Normalization of a database stands for the process of organizing all the information within the database to avoid data replication and redundancy.
normalization means to distribute the data into multiple smaller related tables instead of storing all the data in one large table.
make sure to normalize the things

Every database should, at least, be normalized to third normal form

Avoid Nulls
This can be done by specifying NOT NULL whenever one wants to keep empty information. Avoid nulls or use them only when you truly need them since attributes with null values cannot form primary keys.

Object-Relational Mapping (ORM) frameworks (DB)
serverless API

toJSON method that map default object to a custom object. example _id

MongoDB Compass is a powerful GUI for querying, aggregating, and analyzing your MongoDB data in a visual environment.
https://docs.mongodb.com/compass/current/

__dirname is an environment variable that tells you the absolute path of the directory containing the currently executing file.

mongodb cluster creation and accessing DB online
steps- https://www.mongodb.com/try   signup on mongodb atlas

sso integration


differences between MongoDB and SQLite
MongoDB-
Its first version was released in 2009. It is the most reliable database used with the Node.JS application. Its structure of saving the data is different because it stores data in a document which is like JSON. It used the most popular document store. schema created in this is powerful and flexible. 

High scalability, Sharding and availability with built-in replication make it more robust. 

Sharding is the capability that comes into use when database size becomes so large that a particular machine may not be able to store all data then sharding solves this problem through horizontal scaling. 

scalability gives the developer the ability to easily add or remove as many machines as needed.

It has some great features like document-oriented storage, ease of use, high performance, fast execution of queries and Maintenance of database backup is easy. 

Its queries run very fast because the data is present in one place and it can easily be retrieved. It is very flexible it does not require a unified data structure overall objects. It is easy to use. It also has some problems like- sometimes we face leaking problems and missing data over time. It has not joined all relations that are supposed to be resolved client-side which requires an extra request to the server.

HackerRank, SurveyMonkey, Red Hat Inc, IBM, Citrix, Twitter and Codecademy is one of the popular companies that use MongoDB.

SQLite
SQLite is originally released in 2000. It is a relational database. SQLite is the lite version of SQL which runs on low-powered devices or devices with low memory. There is not much configuration required to run SQLite. It is serverless means there is no need to install, manage, initialize, configure and troubleshoot. But It lacks multiuser capabilities.

It is very manageable throughout different applications, to transfer the entire database all that's needed is to create a copy of the file. You can use this with Node but it is not much used generally. It does not require much support from external libraries or the operating system. 

SQLite has a binding of a large no. of programming languages including C, C# etc. It is a database tool that implements a self-contained, transactional SQL database engine. It has an embedded SQL database engine. The processes run by the server are not separated.
it reads and writes directly to regular disk files. It is single-threaded, simple, lightweight, SQL.

SQLite is used by companies like Intuit, Codorus, and Infoshare.

MongoDB vs 
SQLite
The basic database model used in this is a document store.
It is RDBMS.

scaling is done horizontally. In this, we set up multiple servers and also one standby server which shows the available server to store data.
scaling is done vertically. It is an old approach to saving and getting data. In this, we extend the hardware resources to manage the large data or bug number of users.

No, join support in this so we use integrated stored engines
It supports Join.

Read-only SQL queries via the MongoDB Connector for Business Intelligence (BI).
it uses SQL for queries

In this, we can write Server-side scripts which are stored procedures.
we cannot write a stored procedure in this.

Indexing and searching are powerful in MongoDB.
The indexing and searching are not as strong in MongoDB. 

written in C, C++, JS
written in C, C++
----------------

The most popular document-oriented NoSQL databases are MongoDB and DynamoDB.
mongod stands for “Mongo Daemon”. mongod is a background process used by MongoDB. The main purpose of mongod is to manage all the MongoDB server tasks. For instance, accepting requests, responding to clients, and memory management.
mongo is a command-line shell that can interact with the client (for example, system administrators and developers).
Mongoose is used to interact with a MongoDB (Database) instance. Mongoose methods such as find, findById, findOneAndUpdate, save and remove are used. Just Connect your database by adding a URL to the mongoose instance connection. Load the created model - a task.

Setup-
first, download the community server from this link  https://www.mongodb.com/try/download
C:\Program Files\MongoDB\Server\5.0\bin - set this path in the system variable 
MongoDB needs a data folder to store its files. The default location for the MongoDB data directory is c:\data\db then create Data/db folders in c drive
C:\> mkdir data
C:\> cd data
C:\> mkdir db
then you can run mongod commands

Basic commands-
After creating those two files, head over again to the bin folder you have in your mongodb directory and open up your shell inside it. Run the following command. Now you can run all db commands
>mongod
In order to work with this server, we need a mediator. So open another command window inside the bind folder and run the following command:
>mongo
To get stats of MongoDB server/client. This will give the database name, number of collections and documents in the database.
>db.stats()


To check a list of commands, type db.help() in MongoDB client.


>db.test.save( { a: 1 } )


>db.test.find()

{ "_id" : ObjectId(5879b0f65a56a454), "a" : 1 }

To create Database in MongoDB type command-


>use mydb              

To check on which DB you are working on


>db

If you want to check your databases list, use this command


>show DBS

local     0.78125GB

test      0.23012GB

Your created database (mydb) is not present in the list. To check database status, you need to insert at least one document into it.


 To insert data in db

>db.movie.insert({"name":"steady advice"})         


To drop a existing database

>db.dropDatabase()        



Difference between RDBMS and MongoDB:

RDBMS         
MongoDB

SQL Database    
NoSQL Database

Table            
Collection

Tuple/Row       
Document

column           
Field

Table Join      
Embedded Documents


Primary Key     
Primary Key (Default key _id provided by MongoDB itself)


Database Server and Client Mysql/Oracle, MySQL/sqlplus   
Mongod, mongo
---------
to run server go to this path C:\Program Files\MongoDB\Server\4.4\bin and run mongod command.

https://university.mongodb.com/



SQL Interview questions 

1. What is the difference between 'REPLACE' and 'STUFF' functions in SQL Server?

2. Tell me how to use IDENTITY in SQL Server?

3. What do you mean by SQL join and how can you use it?

Popular libraries-
.NET
Apache Kafka
Apache Spark
Capacitor
Cordova
Electron
Flutter
GTK
Hadoop
Ionic
Keras
NumPy
Pandas
Qt
React Native
Scikit-learn
Spring
Tidyverse
TensorFlow
Torch/PyTorch
Hugging Face Transformers
Uno Platform
Xamarin

Popular developer tools-
Flow
Homebrew
Pulumi
Unity 3D
Unreal Engine
Yarn

Top web backend frameworks. 
Express
Next
Meteor

Next
Next Is A Server-Side Rendering Tool Which Has Gained The Status Of A Universal Back-End Framework For React. Next.Js Was Created By Zeit Venture And Launched In 2017-2018. Apart From Server-Side Rendering Next.Js Also Offers Client-Side Rendering With Automatic Code Separation And Hot Code Reloading. Next.Js Is Being Shifted As A Potential Challenger To End The Dominant Reign Of Express.Js.

Advantages-
Armed With Default Server-Side Rendering.
Automatic Code Splitting: It Automatic Code Splitting. This Boosts Page Reload Speed And It Highly Beneficial For Better SERP Rankings.
Zero Setup: Next Requires Zero Setups And Is Production-Ready Right Out Of The Box.
CSS Support: Next.Js Is Used With Styled-JSX Which Offers Complete CSS Support.
Supports Hot Code Reloading: Loads Only Those DOM Elements That Have Been Modified And Not The Entire Page.

Problems With Next-
Lack Of Support: As Next JS Is Still Early And Has Been Out For Just Over A Year, It Lacks The Level Of Support That It Is More Mature And Older Peers Enjoy.
Next.Js Is Restricted To Be Used Along React And Not Other Popular Front End Javascript Frameworks Like Angular And Vue

Top clients-
Marvel, Invision, Nike, Docker, NPM, Magic Leap, Ticketmaster

Meteor
Meteor JS Is An Open-Source Backend JS Framework Developed By Meteor Development Group. Meteor Is Written In Node JS And Is Used To Develop Cross-Platform Web And Mobile Applications For Both Android And Ios. The Meteor Was Launched In January 2012 And Stable Release Was Rolled Out In May 2018. Initially, The Meteor Was Released Under The Name Skybreakin 2011. Meteor Is Armed With Blaze Engine But Can Also Be Used Along With Popular Front End Libraries/Frameworks Like Angular And React. One Of The Biggest Frustration For Developers Is The Need To Be Up To Date With Multiple Languages For Building A Simple Application. Meteor Eliminates This Burden By Encapsulating Both Front-End And Back-End To Just One Language – Vanilla Javascript. Further Thanks To Its Modular Library Structure, Meteor Is Quite Easy To Set Up And Use.

Advantages-
Simplicity: Meteor Handles Both Client-Side Front End And Server-Side Back End Rolled Into One Single Language – Pure Vanilla Javascript. This Makes Meteor The Easiest To Understand For Beginners Among All Other Rival Frameworks.
Extensive Packages And Libraries: Meteor Offers A Wide Array Of Official Community Libraries And Smart Packages Which are Highly Reliable, Up-To-Date To Enhance Functionality And Speed Up The Development Process.
Real-Time Testing Tool: Meteor Has Its In-Built Testing Tool Called Velocity Which Can Be Integrated With The Most Popular Javascript Frameworks For Testing Like Mocha, Jest And Jasmine.
Helpful Community: Meteor Has A Large Community That Offers Extensive Tutorials Resources And An Endless Stream Of Documentation Which Helps Beginners To Easily Adopt The Framework.
MongoDB: Meteor Supports MongoDB Database Which Is Much Better Than Traditional Relational Databases Like SQL.
Live Reloading: Meteor Supports live Reloading Of Pages Every Time The Code Is Modified And Reloads Only Those DOM Elements That Have Been Altered And Not The Entire Page.
Native Mobile Apps: Meteor Can Be Used For Building Robust Native Cross-Platform Mobile Applications For Both Android And Ios Using Cordova Integration.

Problems With Meteor-
Branding – Meteor Has Seen A Fast Decline In Popularity With The Majority Of Its Users Shifting To Other More Popular Frameworks Like React Angular Vue Js For Frontend And Express.Js And Next.Js For The Backend.
Meteor Has Bad And Complex Integration Compared To Its Rivals. Not Suitable For Beginners.
Supports Only Mongodb Nosql Database Over Much Popular And Widely Used Relational SQL Database.

Top clients-
Mazda, IKEA, Honeywell, MTV, Efounders, Tech Stack, Hazeorid

Top backend languages-
JavaScript
SQL
Python
Ruby
Java
PHP
.NET

JavaScript (JS)-
It is used for both the front end and back end.
It is a higher level of language.
It is so flexible.
The object creation is slow.

What you can do with JS is-
Build websites, mobile and desktop applications, games, web servers, presentations.

Companies that use JS are-
Airbnb, code academy, eBay, square, asana

Average salary-$72k/year


SQL-
Most common query lang. used to interact with DB.

It is a declarative lang.

What you can do with SQL is-

Access, manipulate and create DB

There are various benefits of this you can be financial analysts, data-driven marketers or online entrepreneurs.

Companies that use SQL-

HSBC, Microsoft, Ford etc.

If a company has a DB. They are using SQL query.

Average salary- $98k/year

Java-
It is the most used and popular backend programming lang.
What makes Java different is JVM.
Compiling a program creates a code that may run differently if the computers it's run on are different. This is not an issue for Java because of JVM.
JVM acts like a middle layer that can run code on any computer.
Java is extremely famous for desktop and business software developers.

What you can do with java-

Mobile application development, website development, database connectivity, image processing, GUI based programs, networking.

Companies that use java-

Airbnb, Uber, pin interest, linked in, Groupon, eBay, Evernote, Fitbit, HubSpot.

Average salary- $93k/yr

.NET (C#, VB)-
ASP.NET is Microsoft's answer to the sun microsystem. The web application framework is used to build websites using languages like Visual Basic, C#, F#.

Its MVC architectural pattern allows backend duties to handles by the controller, which interact with the model to process data. The result is presented to the view for display as a front-end webpage.

C#-

High-level programming lang. it allows developers to write a program of independent type. It has very cool syntax

VB-

It used GUI to modify code written in basic programming lang. it is often used for prototyping.

It has one drawback that it uses a large amount of memory to install and run GUI based development tools.

What u can do with .NET-

Build desktop applications, mobile apps, web apps, games, work with big data.

Companies that use .NET-

Microsoft, Starbucks, Docplanner, StackOverflow.

Average salary-$90k/yr



 

 Making your app dynamic - static site generator  - jamstack
 Cloudinary - Media management
Google Analytics - Web traffic analytics
headlesscms.org - Endless list of headless CMSs    https://jamstack.org/headless-cms/
Sanity - CMS   https://www.sanity.io/
Serverless Framework - DIY, easy to deploy serverless resources   https://www.serverless.com/
Snipcart - Ecommerce services  - https://snipcart.com/blog/jamstack
Stripe - Payment management
https://sapper.svelte.dev/
stackbit

The site generators are a combination of server-side rendering and single-page applications.

This handle all things from deployment to creation. 

Note: If you are serious about front-end development, you should consider learning-

Gridsome
https://scully.io/
https://www.gatsbyjs.com/docs/  CMS - Gatsby requires Git and Node.js -  install the Gatsby CLI - https://www.udemy.com/course/gatsby-js-firebase-hybrid-realtime-static-sites/
https://nextjs.org/   - React (Next.js for SSR + static site generation) - Next.js/React for the frontend, a Node API for business logic, and then Hasura to generate my GraphQL API - Lambda functions through Next.js
https://nextjs.org/conf
https://nextjs.org/blog/next-12
nuxt.js
https://graphql.org/code/#javascript  - GraphQL with apollo - TypeScript (with auto-generated types through GraphQL) - Apollo for GraphQL API consumption - GraphQL API deployed to Heroku.
MDX for writing lesson content
 React-based open-source framework
You have experience with search indices like Algolia or Elasticsearch, NoSQL
databases like Firestore, and RDBMS like PostgreSQL
You are comfortable working in Google Cloud Platform (GCP) and/or Firebase
You have experience working with a headless CMS like Contentful, Netlify, or Ghost.
Cloud: GCP, AWS, and Snowflake

overview of the HTTP headers, HTTP Request & Response.

In the HTTP 1.1 version, there are 3 TCP connections while in HTTP version 2 there is 1 TCP connection. TCP carries data to the webserver. Browsers have a same-origin policy, meaning that HTTP request from a server to a different server is not possible. so we cannot use HTTP.

The process starts from the time you type a website's URL in the search bar to finishing loading on your screen. These are the steps that this search follows-

Get the IP address of the URL.

The browser checks the cache for a DNS record to get the corresponding IP address

First, it checks the browser cache

Second, the browser checks the OS cache.

Third, it checks the router cache.

Fourth, it checks the ISP cache.

Once the browser gets the IP address it opens a TCP connection and sends an HTTP request to the webserver.

The web server will manage the request (it happens in multiple steps) and send the HTTP response to the client/browser.

The browser parses the HTML document and renders it.

HTTP headers are bits of meta-data which the browser attaches to your HTTP requests when it sends them to the server. Things like your IP address, the type of browser you are using and so on are added to your headers. We then create request options and add our headers as a property of those options. By default, these requests return observables.

We are sending below details to the server-
Request line: command, HTTP version number, web page requested,
Request header: Includes browser in house, date, host, connection, accept-encoding, user-agent, accept
Request body: contains information that was sent to the server


We are getting this response from the server-
Response status: HTTP version, status code, reason phase
Response header: optional info including the server being used, date, URL of webpage/location, content-type, cookie, cache-control, expires, P3P, pragma, content-encoding, x-connection, the transfer encoding
Response body: The website(in HTML)


It is important to learn the request and response header of the HTTP protocol.

For example, let us send a basic Authorization header. This is simply a header called Authorization with a value that is a username and password converted to base64, No need to worry too much about the specifics just understand that the built-in javascript function btoa converts a string to base64.



These terms are crucial to learning while working on HTTP request and response-


application/x-www-form-urlencoded:

The values are encoded in key-value tuples separated by '&', with a '=' between the key and the value. Non-alphanumeric characters are per cent-encoded: This is the reason why this type is not suitable to use with binary data (use multipart/form-data instead)

text/plain


Server-sent events(SSE) -

It relies on a long-lived HTTP connection, where updates are continuously sent to the client.


WebSockets (via WS)-

The WebSocket protocol allows for constant, bi-directional communication between the server and the client.


max-age-

The max-age directive takes priority over Expires.


Expires -

Expires headers tell the browser whether they should request a specific file from the server or whether they should grab it from the browser's cache.


Date-

The date and time that the message was sent


Age -

The Age response-header field conveys the sender's estimate of the amount of time since the response (or its revalidation) was generated at the origin server.


If-Modified-Since-

The If-Modified-Since request-header field is used with a method to make it conditional: if the requested variant has not been modified since the time specified in this field, an entity will not be returned from the server; instead, a 304 (not modified) response will be returned without any message-body.


Do Not Track-

disable either its tracking or cross-site user tracking


Cache-Control-

Tells all caching mechanisms from server to client whether they may cache this object. It is measured in seconds


Transfer-Encoding: The form of encoding used to safely transfer the entity to the user. Currently defined methods are: chunked, compress, deflate, gzip, identity.


ETag-

An identifier for a specific version of a resource.


X-Frame-Options-

it can be used to indicate whether or not a browser should be allowed to render a page in a <frame>, <iframe> or <object>.


This info we Request in HTTP server-

GET http://facebook.com/ HTTP/1.1

Accept: application/x-ms-application, image/jpeg, application/xamitxml,

User-Agent: Mozilla/5.0 (compatible; MSIE 8.0 Windows NT 6.1; WOW64;)

Accept-Encoding: gzir, deflate

Connection: Keep-Alive

Host: facebook.com

Cookie: datr-1265876274-: locale-enUS: sd-WWusex2101.


This info we get in HTTP server response-

HTTP/1.1 200 OK

Cache-Control: private, no-store, no-cache, must-revalidate, post-check-o,

pre-check-0

Expires: Sat, 01 Jan 2000 00:00:00 GMT

P3P: CP="DSP LAW"

Pragma: no-cache

Content-Encoding: gzip

Content-Type: text/html; charset-utf-8

X-Connection: close

Transfer-Encoding: chunked


Protocols-

20 & 21: File Transfer Protocol (FTP)

22: Secure Shell (SSH)

23: Telnet remote login service

25: Simple Mail Transfer Protocol (SMTP)

53: Domain Name System (DNS) service

80: Hypertext Transfer Protocol (HTTP)

used in the World Wide Web

110: Post Office Protocol (POP3)

119: Network News Transfer Protocol(NNTP)

143: Internet Message Access Protocol(IMAP)

161: Simple Network Management Protocol(SNMP)

194: Internet Relay Chat (IRC)

443: HTTP Secure (HTTPS)

465: SMTP Secure (SMTPS)

Experience in working with IAB protocols like VAST, VPAID, MRAID is a plus

HTTP request-

The client opens a connection and requests data from the server.

The server calculates the response.

The server sends the response back to the client on the opened request.

https://howhttps.works/
https://howdns.works/

https://jasonwatmore.com/post/2020/05/13/node-mongo-api-with-email-sign-up-verification-authentication-forgot-password

https://adonisjs.com/

https://codeforgeek.com/express-nodejs-tutorial/

https://expressjs.com/
https://hasura.io/blog/announcing-hasura-graphql-engine-2-0

https://www.smartdraw.com/entity-relationship-diagram/

online setup of mongo-
https://zellwk.com/blog/crud-express-mongodb/
https://www.bezkoder.com/node-express-mongodb-crud-rest-api/

https://www.mongodb.com/developer/quickstart/cheat-sheet/
