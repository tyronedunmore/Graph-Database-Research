# Neo4j Graph-Database-Research
Exploration of node.js, Neo4j Graph Database &amp; its cypher script language

## Video of walk-through & use case
https://share.descript.com/view/MvnGP14LY1n

## Example Queries
### View all members(orange), skill(red) & project nodes(blue) and their relationships
```
MATCH (n) RETURN n
```

<img src="https://user-images.githubusercontent.com/59738073/176880223-d41348f9-a28c-4085-8d02-67873121acdf.png" width="400">

### View project nodes & their members

```
Match (m:Member)-[:MEMBER]->(p:Project) return m,p
```
<img src="https://user-images.githubusercontent.com/59738073/176884219-1e1d8e1a-100e-4180-aa12-9af27ad7b345.png" width="400">

### View projects & their required skills

```
MATCH (p:Project)-[r:REQUIRED]->(s:Skill) RETURN p,s
```
<img src="https://user-images.githubusercontent.com/59738073/176885064-21d50514-0cd8-4630-8fb8-38d21d80ea09.png" width="400">

### Find non members of School of Code project that have the skills the project requires to find a good member-project-match

```
MATCH (m:Member)
MATCH (s:Skill)
MATCH(p:Project {name: 'School of Code'})
WHERE NOT (m:Member)-[:MEMBER]->(p:Project)
RETURN m,s,p
```
<img src="https://user-images.githubusercontent.com/59738073/176887688-eb7a40a8-f0a1-4526-b4a6-54e1a113e9e2.png" width="400">

