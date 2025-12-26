import { useState } from 'react'

const useFormValidation = (initialState) => {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors = {}

    // Name validation
    if (!values.name || values.name.trim() === '') {
      newErrors.name = 'Name is required'
    }

    // Email validation
    if (!values.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = 'Email is invalid'
    }

    // Message validation
    if (!values.message || values.message.trim() === '') {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues(prevValues => ({
      ...prevValues,
      [name]: value
    }))
  }

  const handleSubmit = async (e, onSubmit) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (validateForm()) {
      try {
        await onSubmit(values)
        setValues(initialState)
        setIsSubmitting(false)
      } catch (error) {
        console.error('Form submission error:', error)
        setIsSubmitting(false)
      }
    } else {
      setIsSubmitting(false)
    }
  }

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit
  }
}

export default useFormValidation