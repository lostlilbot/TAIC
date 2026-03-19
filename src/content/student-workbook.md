# TAIC Student Workbook
## Exercises and Templates for Certification Prep

---

## Module 1: From Chatting to Agentic Engineering

### Exercise 1.1: Identify the Paradigm

Analyze each prompt and identify if it's "Chatting" or "Agentic Engineering":

| Prompt | Type | Issues |
|--------|------|--------|
| "Write me a function" | | |
| "Create an async function that connects to PostgreSQL using psycopg3, returns User objects with proper type hints, includes connection pooling, handles timeout errors with exponential backoff" | | |
| "Explain Python" | | |
| "Explain Python's asyncio event loop to an intermediate developer, comparing it to threading, including code examples for both" | | |

### Exercise 1.2: Transformation Practice

Transform these "chatting" prompts into precision prompts:

1. "Make my code faster"
   - Your transformation: _________________________________

2. "Write tests"
   - Your transformation: _________________________________

---

## Module 2: The 5 Pillars Framework

### Exercise 2.1: Pillar Audit

For each prompt below, identify which of the 5 pillars are present (✓) and which are missing (✗):

| Prompt | Task | Context | Persona | Format | Examples |
|--------|------|---------|---------|--------|----------|
| "Write a Python function" | | | | | |
| "As a senior DevOps engineer, create a Docker compose file for a Node.js + Redis app" | | | | | |
| "Summarize this article" | | | | | |

### Exercise 2.2: Build Your Own Prompt

**Scenario**: You need code to process a CSV file of sales data and generate a PDF report.

Build your prompt using all 5 pillars:

```
TASK:
_____________________________________________________________

CONTEXT:
_____________________________________________________________

PERSONA:
_____________________________________________________________

FORMAT:
_____________________________________________________________

EXAMPLES:
_____________________________________________________________
```

---

## Module 3: Agentic Workflows

### Exercise 3.1: Decomposition Practice

Decompose these complex tasks into 3-5 subtasks:

1. **Build a REST API with authentication**
   - Subtask 1: _________________________________
   - Subtask 2: _________________________________
   - Subtask 3: _________________________________
   - Subtask 4: _________________________________
   - Subtask 5: _________________________________

2. **Create an automated testing pipeline**
   - Subtask 1: _________________________________
   - Subtask 2: _________________________________
   - Subtask 3: _________________________________
   - Subtask 4: _________________________________

### Exercise 3.2: Agent Pattern Selection

Choose the appropriate agent pattern for each scenario:

| Scenario | Best Agent Pattern | Why |
|----------|---------------------|-----|
| Scan code for security vulnerabilities | | |
| Plan a multi-week development project | | |
| Review code written by another agent | | |
| Query a database and return formatted results | | |

---

## Module 4: Vida Resiliente

### Exercise 4.1: Error Diagnosis

For each AI error, diagnose the specific problem and write a corrective prompt:

**Error 1**: AI used `module.exports =` in an ES6 module
- Diagnosis: _________________________________
- Corrective prompt: _________________________________

**Error 2**: AI suggested using `window.scrollY` in a React component (should use useScroll hook)
- Diagnosis: _________________________________
- Corrective prompt: _________________________________

### Exercise 4.2: Recovery Protocol

Complete the recovery protocol template:

```
DETECTION:
What specifically was wrong? _________________________

VERIFICATION:
How did you confirm this was an error? ________________

CORRECTION:
What factual information did you provide? ____________

PREVENTION:
How will you prevent this error in the future? ______
```

---

## Module 5: Certification Challenges Prep

### Challenge 1 Template

Write a prompt that demonstrates all 5 pillars for building a user authentication system:

```
TASK: ________________________________________________
CONTEXT: _____________________________________________
PERSONA: _____________________________________________
FORMAT: ______________________________________________
EXAMPLES: ___________________________________________
```

### Challenge 2 Template

Design a code review automation workflow:

```
DECOMPOSITION:
1. ________________________________________________
2. ________________________________________________
3. ________________________________________________
4. ________________________________________________

ORCHESTRATION:
- Execution order: _______________________________
- Dependencies: __________________________________

VERIFICATION:
- How do you verify each step? __________________
- What happens if a step fails? _________________

AGENT TYPES:
- Which agents for which tasks? _________________
```

### Challenge 3 Template

Write a corrective prompt for this scenario:
AI provided code using Python 2 syntax (`print "hello"` instead of `print("hello")`)

```
SPECIFIC ERROR: ______________________________________

FACTUAL CORRECTION: _________________________________

REQUEST: ___________________________________________
```

---

## Quick Reference Templates

### Template 1: Precision Prompt

```
[ACTION] for [TARGET] using [TOOLS/METHODS]
[CONTEXT: relevant background]
[PERSONA: role and expertise]
[OUTPUT FORMAT: structure specification]
[EXAMPLE: sample input/output if applicable]
```

### Template 2: Agentic Workflow

```
GOAL: [final outcome]
DECOMPOSE:
  1. [subtask 1]
  2. [subtask 2]
  3. [subtask 3]

ORCHESTRATE: [order/dependencies]
VERIFY: [how to check each step]
HANDLE ERRORS: [recovery strategy]
```

### Template 3: Hallucination Correction

```
The output contains [specific error].
According to [source/documentation], the correct approach is [correction].
Please rewrite to [desired outcome].
```

---

## Self-Assessment Checklist

Before taking the certification exam, verify you can:

- [ ] Write a prompt using all 5 pillars
- [ ] Identify when to use agentic vs. chatting approach
- [ ] Decompose a complex task into subtasks
- [ ] Select appropriate agent patterns
- [ ] Diagnose and correct AI hallucinations
- [ ] Build verification into AI workflows
- [ ] Write constructive correction prompts

---

*TAIC Student Workbook*
*Complete all exercises before attempting certification*
