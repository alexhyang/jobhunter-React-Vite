import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';

import { IPostingPost, IFormData } from '@/interfaces';
import { TYPE_OPTIONS, LEVEL_OPTIONS } from './formSelectOptions';
import { InterfaceMapper, strToBulletPoints } from '@/utils';

function PostingForm() {
  const skillRef = useRef<HTMLInputElement>(null);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [uniqueSkills, setUniqueSkills] = useState<string[]>([]);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertVariant, setAlertVariant] = useState<string>('');
  const [alertMessage, setAlertMessage] = useState<string>('');

  const today = new Date();
  const { register, handleSubmit, reset, setValue, getValues } =
    useForm<IFormData>({
      defaultValues: {
        postingUrl: '',
        jobTitle: '',
        company: '',
        location: '',
        jobType: ['Full-time'],
        jobLevel: 'Junior',
        applicationDueDate: today.toISOString().slice(0, 10),
        responsibilities: '',
        qualifications: '',
        skills: '',
        other: '',
      },
    });

  const displayAlert = (variant: string) => {
    if (variant === 'success') {
      setAlertVariant('alert-success');
      setAlertMessage('Posting added!');
      setShowAlert(true);
    } else {
      setAlertVariant('alert-danger');
      setAlertMessage('Something went wrong!');
      setShowAlert(true);
    }

    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    const dataConverted: IPostingPost =
      InterfaceMapper.FormDataToPostingPost(data);
    axios
      .post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/api/postings`,
        dataConverted
      )
      .then((response) => {
        if (response.status === 201) {
          reset();
          displayAlert('success');
        }
      })
      .catch(() => displayAlert('error'));

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const formatTextarea = (name: 'responsibilities' | 'qualifications') => {
    const prev = getValues(name);
    const next = strToBulletPoints(prev);
    setValue(name, next);
  };

  const addExistingSkill = () => {
    const skill = skillRef.current?.value || '';
    const prevSkills = getValues('skills');
    if (skill !== '') {
      if (prevSkills === '') {
        setValue('skills', skill);
      } else {
        setValue('skills', `${getValues('skills')}, ${skill}`);
      }
    }
    if (skillRef.current) {
      skillRef.current.value = '';
    }
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_BASE_URL}/api/summaries/skills`)
      .then((response) => {
        setUniqueSkills(response.data);
        if (skillRef.current) {
          skillRef.current.placeholder = 'Search Skills here';
          setIsDisabled(false);
        }
      })
      .catch(() => {
        if (skillRef.current) {
          skillRef.current.placeholder = 'error fetching skills from server';
        }
      });
  }, []);

  const borderStyles =
    'w-full rounded-md border-gray-300 shadow-sm ' +
    'focus:border-indigo-300 ' +
    'focus:ring focus:ring-indigo-200 focus:ring-opacity-50';
  const disabledStyles = 'opacity-50 cursor-not-allowed';

  const inputStyles = `form-input ${borderStyles}`;
  const selectStyles = `form-select ${borderStyles}`;
  const textStyles = `form-textarea ${inputStyles} rows-10`;
  const buttonStyles =
    'bg-blue-500 hover:bg-blue-600 text-white font-semibold ' +
    'py-2 px-4 rounded-md';

  return (
    <form className="mb-3" onSubmit={handleSubmit(onSubmit)}>
      {showAlert && (
        <div className={`alert ${alertVariant} mb-3`}>{alertMessage}</div>
      )}
      <div className="mb-3">
        <label>
          URL*
          <input
            className={inputStyles}
            type="url"
            {...register('postingUrl', { required: true })}
          />
        </label>
      </div>
      <div className="mb-3 columns-3">
        <div className="col">
          <label>
            Title*
            <input
              className={inputStyles}
              type="text"
              {...register('jobTitle', { required: true })}
            />
          </label>
        </div>
        <div className="col">
          <label>
            Company*
            <input
              className={inputStyles}
              type="text"
              {...register('company', { required: true })}
            />
          </label>
        </div>
        <div className="col">
          <label>
            Location*
            <input
              className={inputStyles}
              type="text"
              {...register('location', { required: true })}
            />
          </label>
        </div>
      </div>
      <div className="mb-3 columns-3">
        <div className="col">
          <label>
            Type*
            <select
              className={selectStyles}
              {...register('jobType', { required: true })}
            >
              {TYPE_OPTIONS.map((jobType) => (
                <option key={jobType.id} value={jobType.value}>
                  {jobType.label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="col">
          <label>
            Level*
            <select
              className={selectStyles}
              {...register('jobLevel', { required: true })}
            >
              {LEVEL_OPTIONS.map((jobLevel) => (
                <option key={jobLevel.id} value={jobLevel.value}>
                  {jobLevel.label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="col">
          <label>
            Due Date*
            <input
              className={inputStyles}
              type="date"
              {...register('applicationDueDate', { required: true })}
            />
          </label>
        </div>
      </div>
      <div className="mb-3">
        <label>
          Responsibilities*
          <textarea
            className={textStyles}
            {...register('responsibilities', { required: true })}
            onBlur={() => formatTextarea('responsibilities')}
            style={{ height: '250px' }}
          />
        </label>
      </div>
      <div className="mb-3">
        <label>
          Qualifications*
          <textarea
            className={textStyles}
            {...register('qualifications', { required: true })}
            onBlur={() => formatTextarea('qualifications')}
            style={{ height: '250px' }}
          />
        </label>
      </div>
      <div className="mb-3">
        <label>
          Skills*
          <input
            className={inputStyles}
            {...register('skills', { required: true })}
          />
        </label>
      </div>
      <div className="flex align-middle mb-3">
        <div className="mr-3 w-1/3">
          <input
            className={
              isDisabled ? `${inputStyles} ${disabledStyles}` : inputStyles
            }
            ref={skillRef}
            type="text"
            list="skillsList"
            disabled={isDisabled}
          />
          <datalist id="skillsList" className="bg-white text-black">
            {uniqueSkills.map((skill) => (
              <option key={skill} value={skill} />
            ))}
          </datalist>
        </div>
        <div className="col">
          <button
            type="button"
            className={
              isDisabled
                ? `${buttonStyles} ${disabledStyles} hover:bg-blue-500`
                : buttonStyles
            }
            onClick={addExistingSkill}
            disabled={isDisabled}
          >
            Add Skill
          </button>
        </div>
      </div>
      <div className="mb-3">
        <label>
          Other
          <input className={inputStyles} {...register('other')} />
        </label>
      </div>
      <div className="flex">
        <div className="mr-3">
          <button type="submit" className={buttonStyles}>
            Submit
          </button>
        </div>
        <div className="col">
          <button
            type="button"
            className={`${buttonStyles} bg-red-600 hover:bg-red-700`}
            onClick={() => reset()}
          >
            Reset
          </button>
        </div>
      </div>
    </form>
  );
}

export default PostingForm;
