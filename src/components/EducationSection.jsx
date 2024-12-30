import React from 'react';
import { EDUCATION } from '../constants';

const EducationSection = () => {
    return (
        <section className="pt-8" id="education">
            <h2 className="mb-4 text-center text-3xl font-bold">Education</h2>
            {EDUCATION.map((education, index) => (
                <div key={index} className="mb-6 p-10">
                    <h3 className="text-xl font-semibold">{education.degree}</h3>
                    <p className="text-lg">{education.institution}</p>
                    <p className="text-sm text-stone-300">{education.duration}</p>
                    <p className="text-sm text-base">{education.description}</p>
                </div>
            ))}
        </section>
    )
}

export default EducationSection