---
permalink: /
# title: "About Me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<!-- I am a Master's student in the Department of Electrical and Computer Engineering at Princeton University. My research focuses on Machine Learning Systems, currently I am focusing on addressing system-level challenges in LLM reasoning. I am fortunate to work closely with [Prof. Tushar Krishna](https://tusharkrishna.ece.gatech.edu/) and [Prof. Yilun Du](https://yilundu.github.io/). -->

I am a Master's student in the Department of Electrical and Computer Engineering at Princeton University. My research focuses on Machine Learning Systems, currently I am focusing on addressing system-level challenges in LLM reasoning. I am fortunate to work closely with [Prof. Tushar Krishna](https://tusharkrishna.ece.gatech.edu/) and [Prof. Yilun Du](https://yilundu.github.io/). Previously, I completely my undergraduate studies in the Department of Electronic Engineering at Tsinghua University, where I was fortunately to be advised by [Prof. Yu Wang](https://nicsefc.ee.tsinghua.edu.cn/) on neural architecture search and AI accelerator design.


**I am looking for PhD positions starting Fall 2025 and research internship opportunities for Summer 2025.**



Education
------
**Princeton University**, Princeton, NJ, USA
- M.S. in Electrical and Computer Engineering (2023 - Present)
  - Research: Machine Learning Systems, Large Language Model Reasoning
  - Collaborating with: Prof. Tushar Krishna & Prof. Yilun Du

**Tsinghua University**, Beijing, China
  - B.E. in Electronic Engineering (*with honors*, 2019 - 2023)
    - Advisor: Prof. Yu Wang

Publications<sup>*</sup>
------

{% assign sorted_pubs = site.publications | sort: "date" | reverse %}
{% for post in sorted_pubs %}
* **[{{ post.title }}]({{ post.paperurl }})**  
  *{{ post.authors }}*  
  {{ post.venue }}, {{ post.year }}
{% endfor %}

<sup>*</sup> Equal Contribution