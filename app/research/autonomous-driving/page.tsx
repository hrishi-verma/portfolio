import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Autonomous Driving Simulation Using Computer Vision | Hrishikesh Verma',
    description: 'Research paper on using Convolutional Neural Networks and OpenCV for autonomous driving simulation, achieving 90% obstacle detection accuracy.',
    openGraph: {
        title: 'Autonomous Driving Simulation Using Computer Vision',
        description: 'Research paper on using Convolutional Neural Networks and OpenCV for autonomous driving simulation.',
        type: 'article',
        authors: ['Hrishikesh Verma'],
        publishedTime: '2024-05-15', // Approximate date
    },
    other: {
        'citation_title': 'Autonomous Driving Simulation Using Computer Vision',
        'citation_author': 'Verma, Hrishikesh',
        'citation_publication_date': '2020/05/01',
        'citation_volume': '02',
        'citation_issue': '05',
        'citation_pdf_url': 'https://hrishikeshverma.com/papers/autonomous-driving-simulation.pdf',
        'citation_abstract_html_url': 'https://hrishikeshverma.com/research/autonomous-driving',
        'citation_language': 'en',
    }
};

export default function ResearchPaper() {
    return (
        <main className="min-h-screen text-gray-900 dark:text-white pt-24 pb-12 px-4 relative z-30">
            <div className="max-w-4xl mx-auto">
                <Link href="/#projects" className="text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300 mb-8 inline-block">
                    ← Back to Portfolio
                </Link>

                <article className="prose dark:prose-invert max-w-none">
                    <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Autonomous Driving Simulation Using Computer Vision</h1>
                    <div className="flex gap-4 text-gray-600 dark:text-gray-400 mb-8">
                        <span>Hrishikesh Verma</span>
                        <span>•</span>
                        <span>May 2020</span>
                        <span>•</span>
                        <span>Vol. 2, Issue 5</span>
                    </div>

                    <div className="bg-white/50 dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800 mb-8 shadow-sm">
                        <h2 className="text-xl font-semibold mb-3 text-purple-700 dark:text-purple-300">Abstract</h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            This research presents a robust system for autonomous driving simulation utilizing Convolutional Neural Networks (CNNs) and OpenCV.
                            The system demonstrates effective lane detection and obstacle avoidance mechanisms, achieving an accuracy of 90% in identifying road obstacles under simulated environments.
                            By optimizing the CNN architecture, we achieved a 15% improvement in prediction accuracy compared to baseline models.
                            (Note: This abstract is a summary. Please refer to the full PDF for detailed methodology and results.)
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="/papers/autonomous-driving-simulation.pdf"
                            target="_blank"
                            className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                        >
                            View Full Paper (PDF)
                        </a>
                        <a
                            href="/papers/autonomous-driving-simulation.pdf"
                            download
                            className="inline-flex items-center justify-center gap-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-6 py-3 rounded-lg font-medium transition-colors border border-gray-200 dark:border-gray-700 shadow-sm"
                        >
                            Download PDF
                        </a>
                    </div>

                    <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8">
                        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Citation</h3>
                        <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg font-mono text-sm text-gray-600 dark:text-gray-400 overflow-x-auto border border-gray-200 dark:border-gray-800">
                            Verma, H. "Autonomous Driving Simulation Using Computer Vision." Vol. 02, Issue 05 (May 2020).
                        </div>
                    </div>
                </article>
            </div>
        </main>
    );
}
