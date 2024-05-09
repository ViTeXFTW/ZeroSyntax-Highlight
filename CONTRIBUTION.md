# Contribution Guidelines
Welcome! I am glad you are interested in contributing to the project. This document will help you get started with contributing to the project. If you have any questions or need help with anything, feel free to ask on Discord.

## Getting your own copy of the repository
To get started with contributing to the project you need to fork the repository to your own GitHub account. You can do this by clicking the "Fork" button in the top right corner of the repository page. This will create a copy of the repository in your own account that you can work on.  

Then you need to create a branch for the changes you want to make. Make sure the branch name is descriptive and follows the branch naming conventions.

## Branch naming conventions
When creating a new branch all letters have to be lower case. Use the appropriate prefix in the branch name to make it easier to see what the branch is for. The following prefixes are used for branches:
| Prefix | Description |
|--------|-------------|
| `feature/` | Used for new features |
| `doc/` | Used for documentation changes |
| `refactor/` | Used for refactoring code |
| `style/` | Used for code style changes |
| `bugfix/` | Used for bug fixes |
| `hotfix/` | Used for critical bug fixes |

Also add a surfix with your name or shortend name to make it easier to see who is working on the branch.

| Suffix | Description |
|--------|-------------|
| `/<initials>` | Name |

example:
```plaintext
feature/new-feature/ViTeXFTW
```

## Style Guide
The styleguide are currently being developed and will be added to the repository when it is ready. This will also update the code base to follow the guidelines set in the style guide.  
For now, try to follow the current code style in the project.

## Commit messages
When making a commit, make sure the commit message is descriptive and follows the commit message conventions. The commit message should be in the present tense and describe what the commit does.

```plaintext
<type>: <short desciption>

(optional) <long description> 
```

| Type | Description |
|------|-------------|
| `feat:` | A new feature. (Correlates with MINOR in Semantic Versioning) |
| `fix:` | A bug fix. (Correlates with PATCH in Semantic Versioning)|
| `docs:` | Documentation changes |
| `style:` | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc) |
| `refactor:` | A code change that neither fixes a bug nor adds a feature |

Example:
```plaintext
feat: Add new feature to the code

This commit adds a new feature to the code. 
```

For more information on how to write good commit messages, see [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/).

## Pull Requests
Before creating a pull request, make sure your changes are tested and working. This makes it easier for me to maintain the project and merge your changes. And overall get the project updated faster.

When you are done with your changes, you can create a pull request to the main repository. Make sure the pull request is descriptive and follows the pull request naming conventions.  

The pull request must state **WHY** and **HOW** it changes the code. It should also reference any issues that the pull request fixes. If there is a pull request template, make sure to fill out all the fields in the template.