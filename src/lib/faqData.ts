export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    id: "faq-1",
    question: "How do you calculate a percentage?",
    answer:
      "To find what percentage one value is of a total, divide the partial value by the total and multiply by 100. For example, 25 out of 100 is 25%. Our tool does this automatically with rounding to two decimal places.",
  },
  {
    id: "faq-2",
    question: "How do you increase a number by a percentage?",
    answer:
      "To increase a value by a percentage, multiply the value by the percentage divided by 100 and add that to the original value. If you have $200 and add 10%, the result is $220. Select Increase in the calculator for an instant result.",
  },
  {
    id: "faq-3",
    question: "How do you decrease a value by a percentage?",
    answer:
      "To decrease a value, subtract the percentage of the value from the original amount. A price of $150 reduced by 20% becomes $120. Use Decrease mode with the starting value and discount percentage.",
  },
  {
    id: "faq-4",
    question: "How do you calculate percent change between two values?",
    answer:
      "Percent change uses ((final value − initial value) / initial value) × 100. If an investment goes from $1,000 to $1,200, the change is +20%. Our Difference mode handles the sign and formula automatically.",
  },
  {
    id: "faq-5",
    question: "Is the calculator free with no sign-up?",
    answer:
      "Yes. The percentage calculator is completely free and requires no account or download. Use it on desktop, tablet, or phone for personal, school, or work calculations.",
  },
  {
    id: "faq-6",
    question: "How accurate are the results?",
    answer:
      "Results are rounded to at most two decimal places and formatted in standard US English number style. For tax, legal, or financial decisions, always verify with a qualified professional.",
  },
  {
    id: "faq-7",
    question: "Can I use decimal numbers?",
    answer:
      "Yes. You can enter decimals with a comma or period. The calculator accepts positive and negative values where it makes mathematical sense (for example, percent change between amounts).",
  },
  {
    id: "faq-8",
    question: "Is my data saved?",
    answer:
      "No. Calculations run in your browser; we do not send your entered values to a server to compute results. See our Privacy Policy for details on cookies and analytics.",
  },
];
