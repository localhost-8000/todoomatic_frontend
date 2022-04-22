
export const _getTaskEmoji = (taskTitle: string) => {
    switch(taskTitle) {
        case "To Do": return "🥲";
        case "In Progress": return "💪🏾";
        case "Done": return "✅";
        default: return "🤷‍♂️";
    }
}