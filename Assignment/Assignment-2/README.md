## Syncing your forked repository
Original repository will be periodically updated and you will need to manually sync new changes from your forked, private repository.

In your local machine, set the upstream to original repository
```bash
cd <your-local-repository>
git remote add upstream https://github.com/ESD-Laboratory/Frontend-Practice
```
then checkout to `main` branch and pull the changes from the upstream
```bash
git checkout main
git pull upstream main
npm install
```
then push the changes to your forked repository
```bash
git push origin main
```

## How to Run the Code
```bash
cd Assignment/<assignment-name>
npm test
```

## Submission
Before you do the assignment first you need to create a new branch with your name and the assignment name e.g. ``git checkout -b <your-name>/<assignment-name>``
After you are done with the assignment, push the branch to your forked repository
Create a pull request from your forked repository to the original repository