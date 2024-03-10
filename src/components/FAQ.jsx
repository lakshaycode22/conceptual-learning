import { useRef, useState } from "react"

const FaqsCard = (props) => {

    const answerElRef = useRef()
    const [state, setState] = useState(false)
    const [answerH, setAnswerH] = useState('0px')
    const { faqsList, idx } = props

    const handleOpenAnswer = () => {
        const answerElH = answerElRef.current.childNodes[0].offsetHeight
        setState(!state)
        setAnswerH(`${answerElH + 20}px`)
    }

    return (
        <div 
            className="space-y-3 mt-5 overflow-hidden border-b"
            key={idx}
            onClick={handleOpenAnswer}
        >
            <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
                {faqsList.q}
                {
                    state ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    )
                }
            </h4>
            <div
                ref={answerElRef} className="duration-300"
                style={state ? {height: answerH } : {height: '0px'}}
            >
                <div>
                    <p className="text-gray-500">
                        {faqsList.a}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default () => {

    const faqsList = [
        {
            q: "What subjects do you teach at Conceptual Learning?",
            a: "We specialize in teaching Mathematics and Science for students from class VI to XII."
        },
        {
            q: "How are your classes conducted?",
            a: "Our classes are conducted both offline and online, with a focus on interactive learning experiences. We use animations, multimedia resources, and hands-on activities to make learning engaging and effective."
        },
        {
            q: "What makes Conceptual Learning different from other coaching institutes?",
            a: "At Conceptual Learning, we prioritize conceptual understanding over rote memorization. Our experienced faculty members employ innovative teaching methods, including the use of animations, to help students grasp difficult concepts more easily."
        },
        {
            q: "How do you ensure personalized attention for each student?",
            a: "We keep our class sizes small to ensure that each student receives individualized attention. Our faculty members are dedicated to understanding the unique learning needs of every student and provide personalized support accordingly."
        },
        {
            q: " Are there any prerequisites for enrolling in your courses?",
            a: "There are no specific prerequisites for enrolling in our courses. We welcome students of all skill levels and backgrounds and tailor our teaching approach to meet their individual needs."
        },
        {
            q: "Can I attend a trial class before enrolling?",
            a: "Yes, we offer trial classes to give prospective students an opportunity to experience our teaching methodology firsthand. Please contact us to schedule a trial class."
        },
        {
            q: "How can I enroll in Conceptual Learning's courses?",
            a: "You can enroll in our courses by reaching us at our institute or by contacting at our whatsapp or by contacting us directly via phone or email. Our team will guide you through the enrollment process and answer any questions you may have."
        },
        {
            q: " Are there any prerequisites for enrolling in your courses?",
            a: "There are no specific prerequisites for enrolling in our courses. We welcome students of all skill levels and backgrounds and tailor our teaching approach to meet their individual needs."
        },
        {
            q: " Are there any scholarship opportunities available?",
            a: "Yes, we offer scholarship opportunities to deserving students based on their academic performance and financial need. Please inquire about scholarship options during the enrollment process."
        },
        {
            q: " How do parents/guardians stay informed about their child's progress?",
            a: "We maintain regular communication with parents/guardians through progress reports, parent-teacher meetings, and online portals where they can track their child's academic progress and performance."
        },
        {
            q: "What safety measures do you have in place for offline classes?",
            a: "We prioritize the safety and well-being of our students and staff. We adhere to all government guidelines and have implemented various safety measures, including temperature checks, sanitization protocols, and social distancing measures, to ensure a safe learning environment for everyone."
        }
    ]
  
    return (
        <section className="leading-relaxed max-w-screen-xl mt-20 mx-auto px-4 md:px-8">
            <div className="space-y-3 text-center">
                <h1 className="text-3xl text-gray-800 font-semibold">
                    Frequently Asked Questions
                </h1>
                <p className="text-gray-600 max-w-lg mx-auto text-lg">
                    Answered all frequently asked questions, Still confused? feel free to contact us.
                </p>
            </div>
            <div className="mt-14 max-w-2xl mx-auto">
                {
                    faqsList.map((item, idx) => (
                        <FaqsCard
                            idx={idx}
                            faqsList={item}
                        />
                    ))
                }
            </div>
        </section>
    )
}