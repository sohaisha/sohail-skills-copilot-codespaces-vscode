function skillsMembers() {
    let members = [
        {name: "John", skills: ["JavaScript", "CSS", "HTML"]},
        {name: "Jane", skills: ["JavaScript", "CSS", "HTML", "Node"]},
        {name: "Jack", skills: ["JavaScript", "CSS", "HTML", "Node", "MongoDB"]}
    ];

    // Get the skills of all members
    let skills = members.map(member => member.skills);

    // Get the skills of members who know Node
    let nodeSkills = members.filter(member => member.skills.includes("Node")).map(member => member.skills);

    return {skills, nodeSkills};
}