# The third-party software
Here, I will write some code to simulate third-party softwares that my digital wallet must integrate to do its job.

These softwares should present some misbehaviors, like:
 - Broke randomly
 - Delay answering

The misbehaviors should be set up by the following environment variables.
 - BREAK_RATE
    - Ex: `0.15` 
        - Means that 15% of the calls should broke 
 - DELAY_RATE
    - Ex: `0.15` 
        - Means that 15% of the calls should delay
 - DELAY_PROPORTION
    - Ex: `3` 
        - Means that when a call delay, it should respond 3x slower

*Important:* As the calls to the third-party software can increase operational costs, it will be important to create strategies to avoid uncessessary calls. (See [Cost Optimization Pilar](https://wa.aws.amazon.com/wat.pillar.costOptimization.en.html) of AWS Well Architected Framework)

## BAAS
The bank as a service third-party should offer the following services:
 - Generate slip for deposit
    - Costs $0.50 each one