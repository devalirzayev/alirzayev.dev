const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

export function formatDate(date: string | null): string {
    if (!date) return "Present";
    const [year, month] = date.split("-");
    return `${months[parseInt(month) - 1]} ${year}`;
}
