import { Check } from "lucide-react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const questions = [
  {
    isSolved: true,
    name: "1. Two Sum",
    difficulty: "Med.",
  },
  {
    isSolved: false,
    name: "2. Add Two Numbers",
    difficulty: "Med.",
  },
  {
    isSolved: false,
    name: "3. Longest Substring Without Repeating Characters",
    difficulty: "Med.",
  },
  {
    isSolved: true,
    name: "4. Median of Two Sorted Arrays",
    difficulty: "Hard",
  },
  {
    isSolved: false,
    name: "5. Longest Palindromic Substring",
    difficulty: "Med.",
  },
  {
    isSolved: true,
    name: "6. ZigZag Conversion",
    difficulty: "Med.",
  },
  {
    isSolved: false,
    name: "7. Reverse Integer",
    difficulty: "Easy",
  },
  {
    isSolved: false,
    name: "8. String to Integer (atoi)",
    difficulty: "Med.",
  },
  {
    isSolved: false,
    name: "9. Palindrome Number",
    difficulty: "Easy",
  },
  {
    isSolved: false,
    name: "10. Regular Expression Matching",
    difficulty: "Hard",
  },
];

export default function ProblemsTable() {
  return (
    <Table>
      <TableBody>
        {questions.map((question) => (
          <TableRow key={question.name}>
            <TableCell>
              {question.isSolved ? (
                <Check className="text-[var(--success-green)] w-4" />
              ) : (
                "  "
              )}
            </TableCell>
            <TableCell>{question.name}</TableCell>
            <TableCell className="text-right">{question.difficulty}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
