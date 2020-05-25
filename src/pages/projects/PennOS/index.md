---
title: "PennOS: A User-level UNIX-like Operating System"
date: "2019-12-01T23:46:37.121Z"
layout: project
draft: false
path: "/projects/380/"
category: "Operating Systems"
tags:
  - "Unix"
  - "C"
description: "PennOS is a UNIX-like operating system designed around subsystems that model those of standard UNIX. It includes programming a basic priority scheduler, flat file system, and user shell interactions. PennOS runs as a guest OS within a single process running on a host OS.
This was the capstone project in our Operating Systems Course (CIS 380)taught by Prof Boon Loo at the University of Pennsylvania"
featuredImage: ./pic2.png
---

Using the ucontext library, we implemented a basic priority scheduler; additionally, we also implemented a flat file system for our operating system to mount, and a basic shell and programming API for a user to interact with the operating system.

![image](./pic2.png)

<br>

  |  
:-------------------------:      |       :-------------------------:
 ![table](./pennLogo.jpeg) <br> University of Pennsylvania <br><br> CIS380:Operating Systems<br><br> **Tools**: C, Unix, File Systems<br><br>**Teammates**: [Matteo Sciolla](https://it.linkedin.com/in/matteo-sciolla-368b68130), [Sheil Sarda](https://www.linkedin.com/in/sheilsarda), [Adam Kirsh](https://www.linkedin.com/in/adam-kirsh-0b9ab67b) <br><br> | The goal of this project was to build a UNIX like Operating System from scratch. I worked on the file system and the user shell as per the specifications "Your operating system will mount a single file system, FlatFAT: a simple file system implementation based on FAT. Your FlatFAT implementation will be stored within a single file on the host file system, and will be mounted by PennOS in a loopback like manner. Additionally, unlike traditional file systems, FlatFAT is only required to handle files within a single top level directory. You are required to allow the creation, modification, and removal of files under the top level directory. The last part of your operating system is providing user land interaction via a simple shell. You will program this shell using the user land system calls providing by PennOS. Your shell will provide job control, stdin/stdout redirection, and a functional set of built-in commands for testing and exploring your operating system." <br><br> Report and code not public per University Policy.








