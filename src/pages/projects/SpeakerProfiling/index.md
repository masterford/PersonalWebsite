---
title: Speaker Profiling Using Machine Learning Methods
date: "2019-12-01T23:46:37.121Z"
layout: project
draft: false
path: "/projects/519/"
category: "Data Analytics, Machine Learning"
tags:
  - "Big Data"
  - "Machine Learning"
  - "Classifier"
description: "Can we use neural networks to classify a speaker’s
raw audio data by the speaker’s metadata, specifically nationality and gender? Can we further take
a semi-supervised-type learning approach to improve classification, by using “learned” metadata
as features to assist in learning other metadata? These are the questions we sought to answer in our final project for CIS519 (Applied Machine Learning) at the University of Pennsylvania"
featuredImage: ./nationalities.png
---

Our team sought to determine the best method to profile specific characteristics of a speaker, given an audio sample. We pre-processed the data to create an even distribution across labels, normalized, and computed fourier transformations as well as F0 fundamental frequency. We then tested different models to determine the most effective classifier.

![image](./nationalities.png)

<br>

  |  
:-------------------------:      |       :-------------------------:
 ![table](./nn_table.png) <br> University of Pennsylvania <br><br> CIS519:Applied Machine Learning <br><br> **Tools**: PyTorch, Python, Fourier Transform, Skitlearn, neural networks, support vector machine <br><br>**Teammates**: [Celine Lee](https://celine-lee.github.io/), [Chris Foley](https://www.linkedin.com/in/christopher-foley-396a90123), [Divya Bade](https://www.linkedin.com/in/divya-bade) <br><br>[Github](https://github.com/masterford/SpeakerProfiling),  [Report](./CIS_519_Final_Report.pdf) | The goal of our project was to determine the best method to profile specific characteristics of a speaker given an audio sample. We focused on classifying the gender and nationality of the speaker. Previous studies in the area of speaker identification and profiling have focused on the use of artificial neural networks or support vector machines independently for classification of either gender or nationality. We used an experimental method to determine if a semi-supervised approach wherein training on nationality and gender together would result in better accuracy than training independently. Ultimately, we found that training independently on nationality and gender with SVMs performed the best. Our NN architecture is shown in the table below ![table](./nn_table.png)








