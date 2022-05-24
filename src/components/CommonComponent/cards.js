import "./cardStyles.css"

export const Cards = ({service}) => {
    return (
        <div className = "service__card">
            <img src={`${service.img}`} alt={`${service.alt}`} />
            <h2>{service.title}</h2>
            <span>{service.desc}</span>
        </div>
    )
}