---
id: group-heuristic-evaluation
title: Group Heuristic Evaluation
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Heuristic Eval Report

<a
  target="_blank"
  href={useBaseUrl("assets/Assignment-9-Voices-Heuristic-Evaluation.pdf")}>

  Full Report PDF

</a>

## Results

### Overview

We had our Medium-Fi prototype evaluated by several classmates. They described our app as: "Voices, an app that allows users to immerse themselves in a location’s culture by listening to user-uploaded stories about that location, browse stories both local and remote, and record and upload their own stories."

### Violation Numbers

* **32** total violations
* **6** violations with severity 4
* **3** violations with severity 3
* **15** violations with severity 1-2
* **8** violations with severity 0

Our most common violations were: Visibility of System Status (**6**), Error Prevention (**6**)

### Summary Recommendations

We received the following general recommendations:

There seems to be a trend we see in our violation descriptions wherein the creators seem to not have
referenced listening or streaming platforms. The basics such as a listening progress toolbar like Apple
Music or Spotify etc. might have to show a user’s current listening session, allowing a user to upload a
narrative instead of assuming they are in quiet place to record, having the recording UI be similar to
the standards set my Apple’s Voice Memos or cameras on iPhones or Androids (such as circle to
square indicator change).

There is also a trend wherein the user’s next step is unclear, whether that’s because the status of the
system is not transparent or the intentions behind navigation elements are unclear. Buttons
throughout the Record screen, for example, are vaguely labeled, which can lead the user to
performing actions on their recording that they don’t want. A number of screens also lack a back
button, so the user has trouble exiting out of unwanted situations.

Strict Recommendations: We found that if the team added a filter feature when viewing the lists of
narratives, this would be more user friendly. We also thought that some of the interfaces, particularly
the user profile, had crowded text.