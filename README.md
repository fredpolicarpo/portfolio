# How to use this repository?
This repository is used to show how I write code to solve problems with software, besides supply seeds(boilerplates) to accelerate the creation of new systems.


# Software Principles
Here I list some principles that I follow to write software solutions
 - [TDD](https://en.wikipedia.org/wiki/Test-driven_development)
 - [SOLID](https://en.wikipedia.org/wiki/SOLID)
 - [IDEALS](https://www.infoq.com/articles/microservices-design-ideals)
 - [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
 - [Enterprise Integration Patterns](https://en.wikipedia.org/wiki/Enterprise_Integration_Patterns)
 
# The problem
Create a digital wallet to provide simple digital bank features
 - Deposit with billet
 - Deposit with bank transfer (TED in)
 - Transfer money to another bank account (TED out)
 - Transfer money to another wallet (P2P)
 - Pay billets with balance
 - Schedule billet payments
 - Show bank statement
 - Show balance
 - Adding contacts to make tansfer easier

**IMPORTANT:**

The features will be relased gradually to validate the disign/architectural decisions by measuring the effort to add and evolve features.

The list above never will be completly developed, it must be increased as it is delivered, because it is necessary to have a long term vision of the product to verify that the software decisions are correct, and that the software life cycle keeps agile and sustainable with a good lead time.

# Requirements
 - The Digital Wallet must use a third party software baas(bank as a service)
 - The software must be deployed in different cloud platforms
   - AWS Beanstalck
   - AWS Lambda
   - AWS ECS/Fargate
   - AWS EKS/Fargate
   - Google Cloud...
   - Microsoft Azure...
 - The software must be delivered in the following formats:
   - API
   - Web Application
   - Mobile Application

# The solutions
Here a list the solutions that I intend to develop to solve the problem
 - Monolith
   - NodeJS/TS
   - SpringBoot/Kotlin 
   - Micronout/Kotlin
 - Microservices
   - NodeJS/TS
   - SpringBoot/Kotlin 
   - Micronout/Kotlin
